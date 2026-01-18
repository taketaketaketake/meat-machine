import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { nanoid } from "nanoid";
import { ForbiddenError } from "./errors.js";

// =============================================================================
// CSRF Protection
// =============================================================================

const CSRF_COOKIE_NAME = "csrf_token";
const CSRF_HEADER_NAME = "x-csrf-token";
const CSRF_TOKEN_LENGTH = 32;

/**
 * Generate a CSRF token and set it as a cookie
 */
export function generateCsrfToken(reply: FastifyReply): string {
  const token = nanoid(CSRF_TOKEN_LENGTH);
  const isProduction = process.env.NODE_ENV === "production";

  reply.setCookie(CSRF_COOKIE_NAME, token, {
    path: "/",
    httpOnly: false, // Must be readable by JavaScript
    secure: isProduction,
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return token;
}

/**
 * Validate CSRF token from header matches cookie
 * Use as preHandler on mutating endpoints
 */
export async function validateCsrf(
  request: FastifyRequest,
  _reply: FastifyReply
): Promise<void> {
  // Skip in development if CSRF_ENABLED is not set
  if (process.env.NODE_ENV !== "production" && !process.env.CSRF_ENABLED) {
    return;
  }

  const cookieToken = request.cookies[CSRF_COOKIE_NAME];
  const headerToken = request.headers[CSRF_HEADER_NAME] as string | undefined;

  if (!cookieToken || !headerToken) {
    throw new ForbiddenError("CSRF token missing");
  }

  if (cookieToken !== headerToken) {
    throw new ForbiddenError("CSRF token mismatch");
  }
}

/**
 * Endpoint to get a fresh CSRF token
 * Call this on app init and after login
 */
export function registerCsrfRoute(fastify: FastifyInstance): void {
  fastify.get("/api/csrf-token", async (_request, reply) => {
    const token = generateCsrfToken(reply);
    return { csrfToken: token };
  });
}

// =============================================================================
// HTTPS Enforcement
// =============================================================================

/**
 * Middleware to enforce HTTPS in production
 * Redirects HTTP requests to HTTPS
 */
export async function enforceHttps(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  // Only enforce in production
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  // Check various headers that indicate HTTPS
  const proto = request.headers["x-forwarded-proto"];
  const isSecure =
    proto === "https" ||
    request.headers["x-forwarded-ssl"] === "on" ||
    (request.socket as any)?.encrypted;

  if (!isSecure) {
    const host = request.headers.host || request.hostname;
    const redirectUrl = `https://${host}${request.url}`;

    reply.redirect(redirectUrl);
  }
}

/**
 * Add security headers to all responses
 */
export function securityHeaders(fastify: FastifyInstance): void {
  fastify.addHook("onSend", async (_request, reply) => {
    // Prevent clickjacking
    reply.header("X-Frame-Options", "DENY");

    // Prevent MIME type sniffing
    reply.header("X-Content-Type-Options", "nosniff");

    // XSS protection (legacy browsers)
    reply.header("X-XSS-Protection", "1; mode=block");

    // Referrer policy
    reply.header("Referrer-Policy", "strict-origin-when-cross-origin");

    // Content Security Policy (adjust as needed)
    if (process.env.NODE_ENV === "production") {
      reply.header(
        "Content-Security-Policy",
        "default-src 'self'; frame-ancestors 'none'"
      );
    }
  });
}

// =============================================================================
// Rate Limiting Configuration
// =============================================================================

/**
 * Rate limit configurations for different route types
 */
export const rateLimitConfigs = {
  // Strict limit for auth endpoints (prevent brute force)
  auth: {
    max: 5, // 5 requests
    timeWindow: "1 minute",
    errorResponseBuilder: () => ({
      error: "TooManyRequests",
      message: "Too many login attempts. Please try again later.",
      statusCode: 429,
    }),
  },

  // Moderate limit for general API
  api: {
    max: 100, // 100 requests
    timeWindow: "1 minute",
    errorResponseBuilder: () => ({
      error: "TooManyRequests",
      message: "Rate limit exceeded. Please slow down.",
      statusCode: 429,
    }),
  },

  // Stricter limit for write operations
  write: {
    max: 30, // 30 requests
    timeWindow: "1 minute",
    errorResponseBuilder: () => ({
      error: "TooManyRequests",
      message: "Too many write operations. Please slow down.",
      statusCode: 429,
    }),
  },
};
