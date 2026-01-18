import { vi } from "vitest";

// Mock Prisma client
vi.mock("../lib/prisma.js", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
    session: {
      findUnique: vi.fn(),
      create: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
    },
    creation: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
    creationTag: {
      findMany: vi.fn(),
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    tag: {
      upsert: vi.fn(),
      update: vi.fn(),
    },
    like: {
      findUnique: vi.fn(),
      create: vi.fn(),
      delete: vi.fn(),
    },
    comment: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
    $transaction: vi.fn((callback) => {
      if (typeof callback === "function") {
        return callback({
          user: {
            findUnique: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
          },
          creation: {
            findUnique: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            delete: vi.fn(),
          },
          creationTag: {
            findMany: vi.fn(),
            create: vi.fn(),
            deleteMany: vi.fn(),
          },
          tag: {
            upsert: vi.fn(),
            update: vi.fn(),
          },
          like: {
            create: vi.fn(),
            delete: vi.fn(),
          },
          comment: {
            create: vi.fn(),
            update: vi.fn(),
            delete: vi.fn(),
            count: vi.fn(),
          },
        });
      }
      return Promise.all(callback);
    }),
    $disconnect: vi.fn(),
  },
}));
