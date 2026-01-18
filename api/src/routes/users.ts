import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../lib/auth.js";
import { NotFoundError } from "../lib/errors.js";
import { paginationSchema, paginate } from "../lib/schemas.js";
import { rateLimitConfigs, validateCsrf } from "../lib/security.js";
import type { User } from "@prisma/client";

// Validation schemas
const usernameParamsSchema = z.object({
  username: z.string().min(1),
});

const updateProfileSchema = z.object({
  displayName: z.string().max(100).optional(),
  bio: z.string().max(500).optional(),
  bioLong: z.string().max(5000).optional(),
  avatarEmoji: z.string().max(10).optional(),
  avatarUrl: z.string().url().optional().nullable(),
  website: z.string().url().optional().nullable(),
  donationUrl: z.string().url().optional().nullable(),
  specialty: z.string().max(100).optional().nullable(),
  specialtyColor: z.string().max(50).optional().nullable(),
  bannerGradient: z.string().max(200).optional().nullable(),
  socialLinks: z.record(z.string()).optional(),
});

// Helper to create public user (no email, no passwordHash)
function toPublicUser(user: User) {
  const { passwordHash, email, ...publicUser } = user;
  return publicUser;
}

export default async function usersRoutes(fastify: FastifyInstance) {
  // GET /api/users/:username - Get public profile
  fastify.get("/:username", async (request) => {
    const { username } = usernameParamsSchema.parse(request.params);

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return { user: toPublicUser(user) };
  });

  // PATCH /api/users/me - Update own profile (write rate limit + CSRF)
  fastify.patch(
    "/me",
    {
      preHandler: [requireAuth, validateCsrf],
      config: { rateLimit: rateLimitConfigs.write },
    },
    async (request) => {
    const body = updateProfileSchema.parse(request.body);
    const userId = request.user!.id;

    const user = await prisma.user.update({
      where: { id: userId },
      data: body,
    });

    return { user: toPublicUser(user) };
    }
  );

  // GET /api/users/:username/creations - Get user's published creations
  fastify.get("/:username/creations", async (request) => {
    const { username } = usernameParamsSchema.parse(request.params);
    const query = paginationSchema.parse(request.query);

    // Find user first
    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    // Get total count
    const total = await prisma.creation.count({
      where: {
        userId: user.id,
        status: "published",
      },
    });

    const { skip, take, meta } = paginate(query, total);

    // Get creations
    const creations = await prisma.creation.findMany({
      where: {
        userId: user.id,
        status: "published",
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
      orderBy: { publishedAt: "desc" },
      skip,
      take,
    });

    // Transform tags for cleaner response
    const data = creations.map((creation) => ({
      ...creation,
      tags: creation.tags.map((t) => t.tag),
    }));

    return { data, meta };
  });
}
