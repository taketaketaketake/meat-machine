import { nanoid } from "nanoid";
import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "./prisma.js";
import { UnauthorizedError } from "./errors.js";

const SESSION_COOKIE_NAME = "session";
const SESSION_EXPIRY_DAYS = 30;

// Generate a secure random session token
export function generateSessionToken(): string {
  return nanoid(32);
}

// Create a new session in the database
export async function createSession(
  userId: string,
  request: FastifyRequest
): Promise<string> {
  const token = generateSessionToken();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + SESSION_EXPIRY_DAYS);

  await prisma.session.create({
    data: {
      userId,
      token,
      expiresAt,
      userAgent: request.headers["user-agent"] ?? null,
      ipAddress: request.ip ?? null,
    },
  });

  return token;
}

// Delete a session from the database
export async function deleteSession(token: string): Promise<void> {
  await prisma.session.deleteMany({
    where: { token },
  });
}

// Get session with user from token
async function getSessionWithUser(token: string) {
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session) {
    return null;
  }

  // Check if session has expired
  if (session.expiresAt < new Date()) {
    await prisma.session.delete({ where: { id: session.id } });
    return null;
  }

  return session;
}

// Set session cookie on response
export function setSessionCookie(
  reply: FastifyReply,
  token: string
): void {
  const isProduction = process.env.NODE_ENV === "production";

  reply.setCookie(SESSION_COOKIE_NAME, token, {
    path: "/",
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: SESSION_EXPIRY_DAYS * 24 * 60 * 60, // seconds
  });
}

// Clear session cookie
export function clearSessionCookie(reply: FastifyReply): void {
  reply.clearCookie(SESSION_COOKIE_NAME, {
    path: "/",
  });
}

// Fastify preHandler hook - requires authentication
export async function requireAuth(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const token = request.cookies[SESSION_COOKIE_NAME];

  if (!token) {
    throw new UnauthorizedError("No session token provided");
  }

  const session = await getSessionWithUser(token);

  if (!session) {
    clearSessionCookie(reply);
    throw new UnauthorizedError("Invalid or expired session");
  }

  request.user = session.user;
  request.session = session;
}

// Fastify preHandler hook - optional authentication (doesn't fail if no session)
export async function optionalAuth(
  request: FastifyRequest,
  _reply: FastifyReply
): Promise<void> {
  const token = request.cookies[SESSION_COOKIE_NAME];

  if (!token) {
    return;
  }

  const session = await getSessionWithUser(token);

  if (session) {
    request.user = session.user;
    request.session = session;
  }
}
