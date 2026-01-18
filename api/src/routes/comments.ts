import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../lib/auth.js";
import { NotFoundError, ForbiddenError } from "../lib/errors.js";
import { paginationSchema, paginate, uuidSchema } from "../lib/schemas.js";
import { rateLimitConfigs, validateCsrf } from "../lib/security.js";

// Validation schemas
const creationIdParamsSchema = z.object({
  id: uuidSchema,
});

const commentIdParamsSchema = z.object({
  commentId: uuidSchema,
});

const createCommentSchema = z.object({
  body: z.string().min(1).max(5000),
  parentId: uuidSchema.optional(),
});

export default async function commentsRoutes(fastify: FastifyInstance) {
  // GET /api/creations/:id/comments - List comments for a creation
  fastify.get("/creations/:id/comments", async (request) => {
    const { id } = creationIdParamsSchema.parse(request.params);
    const query = paginationSchema.parse(request.query);

    // Check creation exists and is published
    const creation = await prisma.creation.findUnique({
      where: { id },
      select: { id: true, status: true },
    });

    if (!creation || creation.status !== "published") {
      throw new NotFoundError("Creation not found");
    }

    // Get total count
    const total = await prisma.comment.count({
      where: { creationId: id },
    });

    const { skip, take, meta } = paginate(query, total);

    // Get comments with authors
    const comments = await prisma.comment.findMany({
      where: { creationId: id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarEmoji: true,
            avatarUrl: true,
            isVerified: true,
          },
        },
      },
      orderBy: { createdAt: "asc" },
      skip,
      take,
    });

    return { data: comments, meta };
  });

  // POST /api/creations/:id/comments - Add comment to a creation (write rate limit + CSRF)
  fastify.post(
    "/creations/:id/comments",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request, reply) => {
      const { id } = creationIdParamsSchema.parse(request.params);
      const body = createCommentSchema.parse(request.body);
      const userId = request.user!.id;

      // Check creation exists and is published
      const creation = await prisma.creation.findUnique({
        where: { id },
        select: { id: true, status: true },
      });

      if (!creation || creation.status !== "published") {
        throw new NotFoundError("Creation not found");
      }

      // If parentId provided, verify parent comment exists
      if (body.parentId) {
        const parentComment = await prisma.comment.findUnique({
          where: { id: body.parentId },
          select: { id: true, creationId: true },
        });

        if (!parentComment || parentComment.creationId !== id) {
          throw new NotFoundError("Parent comment not found");
        }
      }

      // Create comment and update counts in transaction
      const comment = await prisma.$transaction(async (tx) => {
        const newComment = await tx.comment.create({
          data: {
            authorId: userId,
            creationId: id,
            commentableType: "creation",
            body: body.body,
            parentId: body.parentId,
          },
          include: {
            author: {
              select: {
                id: true,
                username: true,
                displayName: true,
                avatarEmoji: true,
                avatarUrl: true,
                isVerified: true,
              },
            },
          },
        });

        // Increment creation's comment count
        await tx.creation.update({
          where: { id },
          data: { commentsCount: { increment: 1 } },
        });

        // If this is a reply, increment parent's replies count
        if (body.parentId) {
          await tx.comment.update({
            where: { id: body.parentId },
            data: { repliesCount: { increment: 1 } },
          });
        }

        return newComment;
      });

      return reply.status(201).send({ comment });
    }
  );

  // DELETE /api/comments/:commentId - Delete a comment (write rate limit + CSRF)
  fastify.delete(
    "/:commentId",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
      const { commentId } = commentIdParamsSchema.parse(request.params);
      const userId = request.user!.id;

      // Find comment
      const comment = await prisma.comment.findUnique({
        where: { id: commentId },
        select: {
          id: true,
          authorId: true,
          creationId: true,
          parentId: true,
        },
      });

      if (!comment) {
        throw new NotFoundError("Comment not found");
      }

      if (comment.authorId !== userId) {
        throw new ForbiddenError("You can only delete your own comments");
      }

      // Delete comment and update counts
      await prisma.$transaction(async (tx) => {
        // Get count of replies to this comment (they'll be cascade deleted)
        const repliesCount = await tx.comment.count({
          where: { parentId: commentId },
        });

        // Delete comment (cascade deletes replies)
        await tx.comment.delete({
          where: { id: commentId },
        });

        // Decrement creation's comment count (including replies)
        if (comment.creationId) {
          await tx.creation.update({
            where: { id: comment.creationId },
            data: { commentsCount: { decrement: 1 + repliesCount } },
          });
        }

        // If this was a reply, decrement parent's replies count
        if (comment.parentId) {
          await tx.comment.update({
            where: { id: comment.parentId },
            data: { repliesCount: { decrement: 1 } },
          });
        }
      });

      return { message: "Comment deleted" };
    }
  );
}
