import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma
const prisma = new PrismaClient();

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
});

// Register plugins
await fastify.register(cors, {
  origin: process.env.FRONTEND_URL || "http://localhost:4321",
  credentials: true,
});

// Decorate fastify with prisma
fastify.decorate("prisma", prisma);

// Health check
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
      auth: "/api/auth/*",
      users: "/api/users/*",
      creations: "/api/creations/*",
      channels: "/api/channels/*",
      threads: "/api/threads/*",
      rooms: "/api/rooms/*",
      tags: "/api/tags/*",
      search: "/api/search",
    },
  };
});

// =============================================================================
// TODO: Register route modules
// =============================================================================
// import authRoutes from './routes/auth.js';
// import userRoutes from './routes/users.js';
// import creationRoutes from './routes/creations.js';
// import channelRoutes from './routes/channels.js';
// import threadRoutes from './routes/threads.js';
// import roomRoutes from './routes/rooms.js';
// import tagRoutes from './routes/tags.js';
// import searchRoutes from './routes/search.js';
//
// await fastify.register(authRoutes, { prefix: '/api/auth' });
// await fastify.register(userRoutes, { prefix: '/api/users' });
// await fastify.register(creationRoutes, { prefix: '/api/creations' });
// await fastify.register(channelRoutes, { prefix: '/api/channels' });
// await fastify.register(threadRoutes, { prefix: '/api/threads' });
// await fastify.register(roomRoutes, { prefix: '/api/rooms' });
// await fastify.register(tagRoutes, { prefix: '/api/tags' });
// await fastify.register(searchRoutes, { prefix: '/api/search' });

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
    ═══════════════════════════════════════
    `);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

// Type augmentation for Fastify
declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}
