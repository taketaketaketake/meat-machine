import Fastify from "fastify";
import cookie from "@fastify/cookie";
import { errorHandler } from "../lib/errors.js";
import authRoutes from "../routes/auth.js";
import usersRoutes from "../routes/users.js";
import creationsRoutes from "../routes/creations.js";
import commentsRoutes from "../routes/comments.js";

// Build a test Fastify app with all routes
export async function buildApp() {
  const app = Fastify({
    logger: false,
  });

  await app.register(cookie);
  app.setErrorHandler(errorHandler);

  await app.register(authRoutes, { prefix: "/api/auth" });
  await app.register(usersRoutes, { prefix: "/api/users" });
  await app.register(creationsRoutes, { prefix: "/api/creations" });
  await app.register(commentsRoutes, { prefix: "/api/comments" });

  return app;
}

// Helper to create a mock user
export function createMockUser(overrides = {}) {
  return {
    id: "123e4567-e89b-12d3-a456-426614174000",
    email: "test@example.com",
    username: "testuser",
    passwordHash: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4FdKrBbLyjHPvzHW", // "password123"
    displayName: "Test User",
    avatarEmoji: "👤",
    avatarUrl: null,
    bio: null,
    bioLong: null,
    website: null,
    donationUrl: null,
    specialty: null,
    specialtyColor: null,
    bannerGradient: null,
    isCreator: false,
    isVerified: false,
    socialLinks: {},
    followersCount: 0,
    followingCount: 0,
    creationsCount: 0,
    collectionsCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}

// Helper to create a mock session
export function createMockSession(userId: string, overrides = {}) {
  return {
    id: "443e4567-e89b-12d3-a456-426614174003",
    userId,
    token: "test-session-token",
    userAgent: "test-agent",
    ipAddress: "127.0.0.1",
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    createdAt: new Date(),
    ...overrides,
  };
}

// Helper to create a mock creation
export function createMockCreation(userId: string, overrides = {}) {
  return {
    id: "223e4567-e89b-12d3-a456-426614174001",
    userId,
    title: "Test Creation",
    description: "A test creation",
    contentType: "photo" as const,
    status: "published" as const,
    fileUrl: "https://example.com/image.jpg",
    thumbnailUrl: null,
    prompt: "test prompt",
    toolUsed: "midjourney",
    parameters: "--ar 16:9",
    toolsMetadata: [],
    metadata: {},
    category: null,
    license: null,
    viewsCount: 0,
    likesCount: 0,
    commentsCount: 0,
    publishedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}

// Helper to create a mock comment
export function createMockComment(
  authorId: string,
  creationId: string,
  overrides = {}
) {
  return {
    id: "333e4567-e89b-12d3-a456-426614174002",
    authorId,
    creationId,
    threadId: null,
    communityPostId: null,
    commentableType: "creation" as const,
    parentId: null,
    body: "Test comment",
    likesCount: 0,
    repliesCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}

// Extract session cookie from response
export function getSessionCookie(response: { headers: Record<string, string | string[] | undefined> }): string | null {
  const setCookie = response.headers["set-cookie"];
  if (!setCookie) return null;

  const cookieStr = Array.isArray(setCookie) ? setCookie[0] : setCookie;
  const match = cookieStr.match(/session=([^;]+)/);
  return match ? match[1] : null;
}
