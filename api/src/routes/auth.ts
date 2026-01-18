import type { FastifyInstance } from "fastify";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import {
  createSession,
  deleteSession,
  setSessionCookie,
  clearSessionCookie,
  requireAuth,
} from "../lib/auth.js";
import { ConflictError, UnauthorizedError } from "../lib/errors.js";
import {
  rateLimitConfigs,
  generateCsrfToken,
  validateCsrf,
} from "../lib/security.js";

// Validation schemas
const registerSchema = z.object({
  email: z.string().email().max(255),
  username: z
    .string()
    .min(3)
    .max(50)
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, underscores, and hyphens"
    ),
  password: z.string().min(8).max(100),
  displayName: z.string().max(100).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

import type { User } from "@prisma/client";

// Helper to strip sensitive fields from user
function toAuthenticatedUser(user: User) {
  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export default async function authRoutes(fastify: FastifyInstance) {
  // POST /api/auth/register - Strict rate limit
  fastify.post(
    "/register",
    {
      config: {
        rateLimit: rateLimitConfigs.auth,
      },
    },
    async (request, reply) => {
      const body = registerSchema.parse(request.body);

      // Check if email already exists
      const existingEmail = await prisma.user.findUnique({
        where: { email: body.email },
      });
      if (existingEmail) {
        throw new ConflictError("Email already registered");
      }

      // Check if username already exists
      const existingUsername = await prisma.user.findUnique({
        where: { username: body.username },
      });
      if (existingUsername) {
        throw new ConflictError("Username already taken");
      }

      // Hash password
      const passwordHash = await bcrypt.hash(body.password, 12);

      // Create user
      const user = await prisma.user.create({
        data: {
          email: body.email,
          username: body.username,
          passwordHash,
          displayName: body.displayName ?? body.username,
        },
      });

      // Create session
      const token = await createSession(user.id, request);
      setSessionCookie(reply, token);

      // Generate CSRF token for the new session
      const csrfToken = generateCsrfToken(reply);

      return reply.status(201).send({
        message: "Registration successful",
        user: toAuthenticatedUser(user),
        csrfToken,
      });
    }
  );

  // POST /api/auth/login - Strict rate limit
  fastify.post(
    "/login",
    {
      config: {
        rateLimit: rateLimitConfigs.auth,
      },
    },
    async (request, reply) => {
      const body = loginSchema.parse(request.body);

      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email: body.email },
      });

      if (!user || !user.passwordHash) {
        throw new UnauthorizedError("Invalid email or password");
      }

      // Verify password
      const validPassword = await bcrypt.compare(
        body.password,
        user.passwordHash
      );
      if (!validPassword) {
        throw new UnauthorizedError("Invalid email or password");
      }

      // Create session
      const token = await createSession(user.id, request);
      setSessionCookie(reply, token);

      // Generate CSRF token for the new session
      const csrfToken = generateCsrfToken(reply);

      return {
        message: "Login successful",
        user: toAuthenticatedUser(user),
        csrfToken,
      };
    }
  );

  // POST /api/auth/logout - Requires auth + CSRF
  fastify.post(
    "/logout",
    { preHandler: [requireAuth, validateCsrf] },
    async (request, reply) => {
      if (request.session) {
        await deleteSession(request.session.token);
      }
      clearSessionCookie(reply);

      // Clear CSRF cookie too
      reply.clearCookie("csrf_token", { path: "/" });

      return { message: "Logout successful" };
    }
  );

  // GET /api/auth/me
  fastify.get("/me", { preHandler: requireAuth }, async (request) => {
    if (!request.user) {
      throw new UnauthorizedError();
    }

    return {
      user: toAuthenticatedUser(request.user),
    };
  });
}
