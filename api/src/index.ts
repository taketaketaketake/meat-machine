import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import rateLimit from "@fastify/rate-limit";
import { prisma } from "./lib/prisma.js";
import { errorHandler } from "./lib/errors.js";
import {
  enforceHttps,
  securityHeaders,
  registerCsrfRoute,
  rateLimitConfigs,
} from "./lib/security.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import creationsRoutes from "./routes/creations.js";
import commentsRoutes from "./routes/comments.js";

// Import types
import "./types.js";

// Initialize Fastify
const fastify = Fastify({
  logger: {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    transport:
      process.env.NODE_ENV !== "production"
        ? {
            target: "pino-pretty",
            options: { colorize: true },
          }
        : undefined,
  },
  // Trust proxy headers for HTTPS detection behind load balancer
  trustProxy: true,
});

// =============================================================================
// Security Middleware
// =============================================================================

// HTTPS enforcement (production only)
fastify.addHook("onRequest", enforceHttps);

// Security headers
securityHeaders(fastify);

// =============================================================================
// Plugins
// =============================================================================

// CORS
await fastify.register(cors, {
  origin: process.env.FRONTEND_URL || "http://localhost:4321",
  credentials: true,
  exposedHeaders: ["set-cookie"],
});

// Cookies
await fastify.register(cookie);

// Global rate limiting (applies to all routes)
await fastify.register(rateLimit, {
  max: rateLimitConfigs.api.max,
  timeWindow: rateLimitConfigs.api.timeWindow,
  errorResponseBuilder: rateLimitConfigs.api.errorResponseBuilder,
});

// Global error handler
fastify.setErrorHandler(errorHandler);

// =============================================================================
// Routes
// =============================================================================

// Health check (no rate limit override needed)
fastify.get("/health", async () => {
  return { status: "ok", timestamp: new Date().toISOString() };
});

// API info
fastify.get("/", async () => {
  return {
    name: "Meat-Machine API",
    version: "1.0.0",
    description: "Backend API for AI Content Platform",
    endpoints: {
      health: "/health",
      csrf: "/api/csrf-token",
      auth: "/api/auth/*",
      users: "/api/users/*",
      creations: "/api/creations/*",
      comments: "/api/comments/*",
    },
  };
});

// CSRF token endpoint
registerCsrfRoute(fastify);

// Route modules
await fastify.register(authRoutes, { prefix: "/api/auth" });
await fastify.register(usersRoutes, { prefix: "/api/users" });
await fastify.register(creationsRoutes, { prefix: "/api/creations" });
await fastify.register(commentsRoutes, { prefix: "/api/comments" });

// =============================================================================
// Lifecycle
// =============================================================================

// Graceful shutdown
const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM"];
signals.forEach((signal) => {
  process.on(signal, async () => {
    fastify.log.info(`Received ${signal}, shutting down...`);
    await fastify.close();
    await prisma.$disconnect();
    process.exit(0);
  });
});

// Start server
const start = async () => {
  try {
    const port = parseInt(process.env.PORT || "3000", 10);
    const host = process.env.HOST || "0.0.0.0";

    await fastify.listen({ port, host });

    console.log(`
    🥩 Meat-Machine API
    ═══════════════════════════════════════
    🚀 Server running at http://${host}:${port}
    📊 Health check:   http://${host}:${port}/health
    🔧 Environment:    ${process.env.NODE_ENV || "development"}
    🔒 HTTPS:          ${process.env.NODE_ENV === "production" ? "Enforced" : "Disabled"}
    🛡️  Rate Limit:     ${rateLimitConfigs.api.max} req/${rateLimitConfigs.api.timeWindow}
    ═══════════════════════════════════════
    `);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
