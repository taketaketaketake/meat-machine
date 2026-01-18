import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  buildApp,
  createMockUser,
  createMockSession,
  createMockCreation,
} from "../test/helpers.js";
import { prisma } from "../lib/prisma.js";

describe("Users Routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("GET /api/users/:username", () => {
    it("should return public profile", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();

      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);

      const response = await app.inject({
        method: "GET",
        url: "/api/users/testuser",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.user.username).toBe("testuser");
      expect(body.user.email).toBeUndefined(); // email should be stripped
      expect(body.user.passwordHash).toBeUndefined();

      await app.close();
    });

    it("should return 404 for non-existent user", async () => {
      const app = await buildApp();

      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "GET",
        url: "/api/users/nonexistent",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("User not found");

      await app.close();
    });
  });

  describe("PATCH /api/users/me", () => {
    it("should update own profile", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const updatedUser = createMockUser({
        displayName: "Updated Name",
        bio: "New bio",
      });

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.user.update).mockResolvedValue(updatedUser);

      const response = await app.inject({
        method: "PATCH",
        url: "/api/users/me",
        cookies: {
          session: mockSession.token,
        },
        payload: {
          displayName: "Updated Name",
          bio: "New bio",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.user.displayName).toBe("Updated Name");
      expect(body.user.bio).toBe("New bio");

      await app.close();
    });

    it("should reject without auth", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "PATCH",
        url: "/api/users/me",
        payload: {
          displayName: "Updated Name",
        },
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });

    it("should validate url fields", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);

      const response = await app.inject({
        method: "PATCH",
        url: "/api/users/me",
        cookies: {
          session: mockSession.token,
        },
        payload: {
          website: "not-a-valid-url",
        },
      });

      expect(response.statusCode).toBe(400);

      await app.close();
    });
  });

  describe("GET /api/users/:username/creations", () => {
    it("should return user creations", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.user.findUnique).mockResolvedValue({ id: mockUser.id } as any);
      vi.mocked(prisma.creation.count).mockResolvedValue(1);
      vi.mocked(prisma.creation.findMany).mockResolvedValue([
        {
          ...mockCreation,
          user: {
            id: mockUser.id,
            username: mockUser.username,
            displayName: mockUser.displayName,
            avatarEmoji: mockUser.avatarEmoji,
            avatarUrl: mockUser.avatarUrl,
            isVerified: mockUser.isVerified,
          },
          tags: [],
        },
      ] as any);

      const response = await app.inject({
        method: "GET",
        url: "/api/users/testuser/creations",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.data).toHaveLength(1);
      expect(body.data[0].title).toBe("Test Creation");
      expect(body.meta.total).toBe(1);

      await app.close();
    });

    it("should return 404 for non-existent user", async () => {
      const app = await buildApp();

      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "GET",
        url: "/api/users/nonexistent/creations",
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });

    it("should paginate results", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();

      vi.mocked(prisma.user.findUnique).mockResolvedValue({ id: mockUser.id } as any);
      vi.mocked(prisma.creation.count).mockResolvedValue(50);
      vi.mocked(prisma.creation.findMany).mockResolvedValue([]);

      const response = await app.inject({
        method: "GET",
        url: "/api/users/testuser/creations?page=2&limit=10",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.meta.page).toBe(2);
      expect(body.meta.limit).toBe(10);
      expect(body.meta.total).toBe(50);
      expect(body.meta.totalPages).toBe(5);
      expect(body.meta.hasMore).toBe(true);

      await app.close();
    });
  });
});
