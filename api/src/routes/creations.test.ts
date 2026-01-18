import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  buildApp,
  createMockUser,
  createMockSession,
  createMockCreation,
} from "../test/helpers.js";
import { prisma } from "../lib/prisma.js";

describe("Creations Routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("GET /api/creations", () => {
    it("should return list of published creations", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockCreation = createMockCreation(mockUser.id);

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
          likes: [],
        },
      ] as any);

      const response = await app.inject({
        method: "GET",
        url: "/api/creations",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.data).toHaveLength(1);
      expect(body.data[0].title).toBe("Test Creation");
      expect(body.data[0].isLiked).toBe(false);

      await app.close();
    });

    it("should filter by contentType", async () => {
      const app = await buildApp();

      vi.mocked(prisma.creation.count).mockResolvedValue(0);
      vi.mocked(prisma.creation.findMany).mockResolvedValue([]);

      const response = await app.inject({
        method: "GET",
        url: "/api/creations?contentType=video",
      });

      expect(response.statusCode).toBe(200);
      expect(prisma.creation.count).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            contentType: "video",
          }),
        })
      );

      await app.close();
    });

    it("should sort by popularity", async () => {
      const app = await buildApp();

      vi.mocked(prisma.creation.count).mockResolvedValue(0);
      vi.mocked(prisma.creation.findMany).mockResolvedValue([]);

      const response = await app.inject({
        method: "GET",
        url: "/api/creations?sortBy=popular",
      });

      expect(response.statusCode).toBe(200);
      expect(prisma.creation.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          orderBy: { likesCount: "desc" },
        })
      );

      await app.close();
    });
  });

  describe("POST /api/creations", () => {
    it("should create a new creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id, { status: "draft" });

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);

      vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
        return callback({
          creation: {
            create: vi.fn().mockResolvedValue({
              ...mockCreation,
              user: {
                id: mockUser.id,
                username: mockUser.username,
                displayName: mockUser.displayName,
                avatarEmoji: mockUser.avatarEmoji,
                avatarUrl: mockUser.avatarUrl,
                isVerified: mockUser.isVerified,
              },
            }),
          },
          tag: { upsert: vi.fn() },
          creationTag: { create: vi.fn() },
          user: { update: vi.fn() },
        });
      });

      vi.mocked(prisma.creationTag.findMany).mockResolvedValue([]);

      const response = await app.inject({
        method: "POST",
        url: "/api/creations",
        cookies: {
          session: mockSession.token,
        },
        payload: {
          title: "Test Creation",
          contentType: "photo",
          fileUrl: "https://example.com/image.jpg",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.creation.title).toBe("Test Creation");
      expect(body.creation.status).toBe("draft");

      await app.close();
    });

    it("should reject without auth", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "POST",
        url: "/api/creations",
        payload: {
          title: "Test",
          contentType: "photo",
          fileUrl: "https://example.com/image.jpg",
        },
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });

    it("should validate required fields", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);

      const response = await app.inject({
        method: "POST",
        url: "/api/creations",
        cookies: {
          session: mockSession.token,
        },
        payload: {
          title: "Test",
          // missing contentType and fileUrl
        },
      });

      expect(response.statusCode).toBe(400);

      await app.close();
    });
  });

  describe("GET /api/creations/:id", () => {
    it("should return a creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        ...mockCreation,
        user: {
          id: mockUser.id,
          username: mockUser.username,
          displayName: mockUser.displayName,
          avatarEmoji: mockUser.avatarEmoji,
          avatarUrl: mockUser.avatarUrl,
          isVerified: mockUser.isVerified,
          bio: mockUser.bio,
        },
        tags: [],
        likes: [],
      } as any);
      vi.mocked(prisma.creation.update).mockResolvedValue(mockCreation as any);

      const response = await app.inject({
        method: "GET",
        url: `/api/creations/${mockCreation.id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.creation.title).toBe("Test Creation");

      await app.close();
    });

    it("should return 404 for non-existent creation", async () => {
      const app = await buildApp();

      vi.mocked(prisma.creation.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "GET",
        url: "/api/creations/123e4567-e89b-12d3-a456-426614174000",
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });

    it("should return 404 for unpublished creation by other user", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockCreation = createMockCreation(mockUser.id, { status: "draft" });

      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        ...mockCreation,
        user: mockUser,
        tags: [],
        likes: [],
      } as any);

      const response = await app.inject({
        method: "GET",
        url: `/api/creations/${mockCreation.id}`,
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });
  });

  describe("PATCH /api/creations/:id", () => {
    it("should update own creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        userId: mockUser.id,
      } as any);
      vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
        return callback({
          creation: {
            update: vi.fn().mockResolvedValue({
              ...mockCreation,
              title: "Updated Title",
              description: "Updated description",
              user: {
                id: mockUser.id,
                username: mockUser.username,
                displayName: mockUser.displayName,
                avatarEmoji: mockUser.avatarEmoji,
                avatarUrl: mockUser.avatarUrl,
                isVerified: mockUser.isVerified,
              },
            }),
          },
          creationTag: {
            findMany: vi.fn().mockResolvedValue([]),
            deleteMany: vi.fn(),
            create: vi.fn(),
          },
          tag: { upsert: vi.fn(), update: vi.fn() },
        });
      });
      vi.mocked(prisma.creationTag.findMany).mockResolvedValue([]);

      const response = await app.inject({
        method: "PATCH",
        url: `/api/creations/${mockCreation.id}`,
        cookies: {
          session: mockSession.token,
        },
        payload: {
          title: "Updated Title",
          description: "Updated description",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.creation.title).toBe("Updated Title");

      await app.close();
    });

    it("should reject updating other user's creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const otherUser = createMockUser({ id: "773e4567-e89b-12d3-a456-426614174006" });
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(otherUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        userId: otherUser.id,
      } as any);

      const response = await app.inject({
        method: "PATCH",
        url: `/api/creations/${mockCreation.id}`,
        cookies: {
          session: mockSession.token,
        },
        payload: {
          title: "Hacked Title",
        },
      });

      expect(response.statusCode).toBe(403);

      await app.close();
    });

    it("should reject without auth", async () => {
      const app = await buildApp();
      const mockCreation = createMockCreation("some-user-id");

      const response = await app.inject({
        method: "PATCH",
        url: `/api/creations/${mockCreation.id}`,
        payload: {
          title: "Updated Title",
        },
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });

    it("should return 404 for non-existent creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "PATCH",
        url: "/api/creations/123e4567-e89b-12d3-a456-426614174000",
        cookies: {
          session: mockSession.token,
        },
        payload: {
          title: "Updated Title",
        },
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });
  });

  describe("DELETE /api/creations/:id", () => {
    it("should delete own creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        userId: mockUser.id,
      } as any);
      vi.mocked(prisma.$transaction).mockResolvedValue(undefined);

      const response = await app.inject({
        method: "DELETE",
        url: `/api/creations/${mockCreation.id}`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Creation deleted");

      await app.close();
    });

    it("should reject deleting other user's creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const otherUser = createMockUser({ id: "other-user-id" });
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(otherUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        userId: otherUser.id,
      } as any);

      const response = await app.inject({
        method: "DELETE",
        url: `/api/creations/${mockCreation.id}`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(403);

      await app.close();
    });
  });

  describe("POST /api/creations/:id/like", () => {
    it("should like a creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        id: mockCreation.id,
        status: "published",
      } as any);
      vi.mocked(prisma.like.findUnique).mockResolvedValue(null);
      vi.mocked(prisma.$transaction).mockResolvedValue([{}, {}]);

      const response = await app.inject({
        method: "POST",
        url: `/api/creations/${mockCreation.id}/like`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Liked");

      await app.close();
    });

    it("should return already liked if duplicate", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        id: mockCreation.id,
        status: "published",
      } as any);
      vi.mocked(prisma.like.findUnique).mockResolvedValue({ id: "like-1" } as any);

      const response = await app.inject({
        method: "POST",
        url: `/api/creations/${mockCreation.id}/like`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Already liked");

      await app.close();
    });
  });

  describe("DELETE /api/creations/:id/like", () => {
    it("should unlike a creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.like.findUnique).mockResolvedValue({
        id: "883e4567-e89b-12d3-a456-426614174007",
      } as any);
      vi.mocked(prisma.$transaction).mockResolvedValue([{}, {}]);

      const response = await app.inject({
        method: "DELETE",
        url: `/api/creations/${mockCreation.id}/like`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Unliked");

      await app.close();
    });

    it("should return not liked if not previously liked", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.like.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "DELETE",
        url: `/api/creations/${mockCreation.id}/like`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Not liked");

      await app.close();
    });

    it("should reject without auth", async () => {
      const app = await buildApp();
      const mockCreation = createMockCreation("some-user-id");

      const response = await app.inject({
        method: "DELETE",
        url: `/api/creations/${mockCreation.id}/like`,
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });
  });

  describe("POST /api/creations/:id/publish", () => {
    it("should publish a draft creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id, { status: "draft" });

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        userId: mockUser.id,
        status: "draft",
      } as any);
      vi.mocked(prisma.creation.update).mockResolvedValue({
        ...mockCreation,
        status: "published",
        publishedAt: new Date(),
        user: mockUser,
        tags: [],
      } as any);

      const response = await app.inject({
        method: "POST",
        url: `/api/creations/${mockCreation.id}/publish`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.creation.status).toBe("published");

      await app.close();
    });

    it("should reject publishing other user's creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const otherUser = createMockUser({ id: "other-user-id" });
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        userId: otherUser.id,
        status: "draft",
      } as any);

      const response = await app.inject({
        method: "POST",
        url: "/api/creations/123e4567-e89b-12d3-a456-426614174000/publish",
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(403);

      await app.close();
    });
  });
});
