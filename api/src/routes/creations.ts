import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth, optionalAuth } from "../lib/auth.js";
import { NotFoundError, ForbiddenError } from "../lib/errors.js";
import { paginationSchema, paginate, uuidSchema } from "../lib/schemas.js";
import { rateLimitConfigs, validateCsrf } from "../lib/security.js";

// Validation schemas
const contentTypeEnum = z.enum(["video", "photo", "audio", "article"]);

const createCreationSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().max(5000).optional(),
  contentType: contentTypeEnum,
  fileUrl: z.string().url(),
  thumbnailUrl: z.string().url().optional().nullable(),
  prompt: z.string().max(10000).optional(),
  toolUsed: z.string().max(100).optional(),
  parameters: z.string().max(1000).optional(),
  category: z.string().max(100).optional(),
  tags: z.array(z.string().max(100)).max(10).optional(),
});

const updateCreationSchema = createCreationSchema.partial();

const listQuerySchema = paginationSchema.extend({
  contentType: contentTypeEnum.optional(),
  userId: z.string().uuid().optional(),
  toolUsed: z.string().optional(),
  sortBy: z.enum(["recent", "popular", "views"]).default("recent"),
});

const idParamsSchema = z.object({
  id: uuidSchema,
});

export default async function creationsRoutes(fastify: FastifyInstance) {
  // GET /api/creations - List creations (feed)
  fastify.get("/", { preHandler: optionalAuth }, async (request) => {
    const query = listQuerySchema.parse(request.query);
    const currentUserId = request.user?.id;

    // Build where clause
    const where: {
      status: "published";
      contentType?: "video" | "photo" | "audio" | "article";
      userId?: string;
      toolUsed?: string;
    } = {
      status: "published",
    };

    if (query.contentType) {
      where.contentType = query.contentType;
    }
    if (query.userId) {
      where.userId = query.userId;
    }
    if (query.toolUsed) {
      where.toolUsed = query.toolUsed;
    }

    // Get total count
    const total = await prisma.creation.count({ where });
    const { skip, take, meta } = paginate(query, total);

    // Determine sort order
    const orderBy =
      query.sortBy === "popular"
        ? { likesCount: "desc" as const }
        : query.sortBy === "views"
          ? { viewsCount: "desc" as const }
          : { publishedAt: "desc" as const };

    // Get creations
    const creations = await prisma.creation.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarEmoji: true,
            avatarUrl: true,
            isVerified: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        likes: currentUserId
          ? {
              where: { userId: currentUserId },
              select: { id: true },
            }
          : false,
      },
      orderBy,
      skip,
      take,
    });

    // Transform response
    const data = creations.map((creation) => ({
      ...creation,
      tags: creation.tags.map((t) => t.tag),
      isLiked: currentUserId ? creation.likes.length > 0 : false,
      likes: undefined, // Remove likes array from response
    }));

    return { data, meta };
  });

  // POST /api/creations - Create new creation (write rate limit + CSRF)
  fastify.post(
    "/",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request, reply) => {
    const body = createCreationSchema.parse(request.body);
    const userId = request.user!.id;

    // Create creation with tags in a transaction
    const creation = await prisma.$transaction(async (tx) => {
      // Create the creation
      const newCreation = await tx.creation.create({
        data: {
          userId,
          title: body.title,
          description: body.description,
          contentType: body.contentType,
          fileUrl: body.fileUrl,
          thumbnailUrl: body.thumbnailUrl,
          prompt: body.prompt,
          toolUsed: body.toolUsed,
          parameters: body.parameters,
          category: body.category,
          status: "draft",
        },
        include: {
          user: {
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

      // Handle tags if provided
      if (body.tags && body.tags.length > 0) {
        for (const tagName of body.tags) {
          const tagId = tagName.toLowerCase().replace(/[^a-z0-9-]/g, "-");

          // Upsert tag
          await tx.tag.upsert({
            where: { id: tagId },
            update: { usageCount: { increment: 1 } },
            create: {
              id: tagId,
              name: `#${tagName}`,
              usageCount: 1,
            },
          });

          // Link tag to creation
          await tx.creationTag.create({
            data: {
              creationId: newCreation.id,
              tagId,
            },
          });
        }
      }

      // Increment user's creations count
      await tx.user.update({
        where: { id: userId },
        data: { creationsCount: { increment: 1 } },
      });

      return newCreation;
    });

    // Fetch tags for response
    const tags = await prisma.creationTag.findMany({
      where: { creationId: creation.id },
      include: { tag: true },
    });

    return reply.status(201).send({
      creation: {
        ...creation,
        tags: tags.map((t) => t.tag),
      },
    });
    }
  );

  // GET /api/creations/:id - Get single creation
  fastify.get("/:id", { preHandler: optionalAuth }, async (request) => {
    const { id } = idParamsSchema.parse(request.params);
    const currentUserId = request.user?.id;

    const creation = await prisma.creation.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarEmoji: true,
            avatarUrl: true,
            isVerified: true,
            bio: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        likes: currentUserId
          ? {
              where: { userId: currentUserId },
              select: { id: true },
            }
          : false,
      },
    });

    if (!creation) {
      throw new NotFoundError("Creation not found");
    }

    // Check if user can view (published or own)
    if (creation.status !== "published" && creation.userId !== currentUserId) {
      throw new NotFoundError("Creation not found");
    }

    // Increment view count (simple, no dedup for MVP)
    await prisma.creation.update({
      where: { id },
      data: { viewsCount: { increment: 1 } },
    });

    return {
      creation: {
        ...creation,
        tags: creation.tags.map((t) => t.tag),
        isLiked: currentUserId ? creation.likes.length > 0 : false,
        likes: undefined,
      },
    };
  });

  // PATCH /api/creations/:id - Update creation (write rate limit + CSRF)
  fastify.patch(
    "/:id",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
    const { id } = idParamsSchema.parse(request.params);
    const body = updateCreationSchema.parse(request.body);
    const userId = request.user!.id;

    // Find creation and verify ownership
    const existing = await prisma.creation.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing) {
      throw new NotFoundError("Creation not found");
    }

    if (existing.userId !== userId) {
      throw new ForbiddenError("You can only edit your own creations");
    }

    // Extract tags from body for separate handling
    const { tags, ...updateData } = body;

    // Update creation
    const creation = await prisma.$transaction(async (tx) => {
      const updated = await tx.creation.update({
        where: { id },
        data: updateData,
        include: {
          user: {
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

      // Handle tags if provided
      if (tags !== undefined) {
        // Get current tags
        const currentTags = await tx.creationTag.findMany({
          where: { creationId: id },
          select: { tagId: true },
        });

        // Decrement usage count for removed tags
        for (const ct of currentTags) {
          await tx.tag.update({
            where: { id: ct.tagId },
            data: { usageCount: { decrement: 1 } },
          });
        }

        // Remove all current tags
        await tx.creationTag.deleteMany({
          where: { creationId: id },
        });

        // Add new tags
        for (const tagName of tags) {
          const tagId = tagName.toLowerCase().replace(/[^a-z0-9-]/g, "-");

          await tx.tag.upsert({
            where: { id: tagId },
            update: { usageCount: { increment: 1 } },
            create: {
              id: tagId,
              name: `#${tagName}`,
              usageCount: 1,
            },
          });

          await tx.creationTag.create({
            data: {
              creationId: id,
              tagId,
            },
          });
        }
      }

      return updated;
    });

    // Fetch updated tags
    const creationTags = await prisma.creationTag.findMany({
      where: { creationId: id },
      include: { tag: true },
    });

    return {
      creation: {
        ...creation,
        tags: creationTags.map((t) => t.tag),
      },
    };
    }
  );

  // DELETE /api/creations/:id - Delete creation (write rate limit + CSRF)
  fastify.delete(
    "/:id",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
    const { id } = idParamsSchema.parse(request.params);
    const userId = request.user!.id;

    // Find creation and verify ownership
    const existing = await prisma.creation.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing) {
      throw new NotFoundError("Creation not found");
    }

    if (existing.userId !== userId) {
      throw new ForbiddenError("You can only delete your own creations");
    }

    // Delete creation and decrement user count
    await prisma.$transaction(async (tx) => {
      // Get tags to decrement their counts
      const tags = await tx.creationTag.findMany({
        where: { creationId: id },
        select: { tagId: true },
      });

      for (const tag of tags) {
        await tx.tag.update({
          where: { id: tag.tagId },
          data: { usageCount: { decrement: 1 } },
        });
      }

      // Delete creation (cascade handles tags, likes, comments)
      await tx.creation.delete({
        where: { id },
      });

      // Decrement user's creations count
      await tx.user.update({
        where: { id: userId },
        data: { creationsCount: { decrement: 1 } },
      });
    });

    return { message: "Creation deleted" };
    }
  );

  // POST /api/creations/:id/publish - Publish creation (write rate limit + CSRF)
  fastify.post(
    "/:id/publish",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
    const { id } = idParamsSchema.parse(request.params);
    const userId = request.user!.id;

    // Find creation and verify ownership
    const existing = await prisma.creation.findUnique({
      where: { id },
      select: { userId: true, status: true },
    });

    if (!existing) {
      throw new NotFoundError("Creation not found");
    }

    if (existing.userId !== userId) {
      throw new ForbiddenError("You can only publish your own creations");
    }

    if (existing.status === "published") {
      return { message: "Creation is already published" };
    }

    const creation = await prisma.creation.update({
      where: { id },
      data: {
        status: "published",
        publishedAt: new Date(),
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarEmoji: true,
            avatarUrl: true,
            isVerified: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return {
      creation: {
        ...creation,
        tags: creation.tags.map((t) => t.tag),
      },
    };
    }
  );

  // POST /api/creations/:id/like - Like creation (write rate limit + CSRF)
  fastify.post(
    "/:id/like",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
    const { id } = idParamsSchema.parse(request.params);
    const userId = request.user!.id;

    // Check creation exists
    const creation = await prisma.creation.findUnique({
      where: { id },
      select: { id: true, status: true },
    });

    if (!creation || creation.status !== "published") {
      throw new NotFoundError("Creation not found");
    }

    // Check if already liked
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_creationId: {
          userId,
          creationId: id,
        },
      },
    });

    if (existingLike) {
      return { message: "Already liked" };
    }

    // Create like and increment count
    await prisma.$transaction([
      prisma.like.create({
        data: {
          userId,
          creationId: id,
          likeableType: "creation",
        },
      }),
      prisma.creation.update({
        where: { id },
        data: { likesCount: { increment: 1 } },
      }),
    ]);

    return { message: "Liked" };
    }
  );

  // DELETE /api/creations/:id/like - Unlike creation (write rate limit + CSRF)
  fastify.delete(
    "/:id/like",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
    const { id } = idParamsSchema.parse(request.params);
    const userId = request.user!.id;

    // Check if like exists
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_creationId: {
          userId,
          creationId: id,
        },
      },
    });

    if (!existingLike) {
      return { message: "Not liked" };
    }

    // Delete like and decrement count
    await prisma.$transaction([
      prisma.like.delete({
        where: { id: existingLike.id },
      }),
      prisma.creation.update({
        where: { id },
        data: { likesCount: { decrement: 1 } },
      }),
    ]);

    return { message: "Unliked" };
    }
  );
}
