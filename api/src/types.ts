import type { User, Session } from "@prisma/client";

declare module "fastify" {
  interface FastifyRequest {
    user?: User;
    session?: Session;
  }
}

// User without sensitive fields - for public responses
export type PublicUser = Omit<User, "passwordHash" | "email">;

// User with email but without password - for authenticated user responses
export type AuthenticatedUser = Omit<User, "passwordHash">;
