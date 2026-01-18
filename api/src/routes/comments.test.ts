import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  buildApp,
  createMockUser,
  createMockSession,
  createMockCreation,
  createMockComment,
} from "../test/helpers.js";
import { prisma } from "../lib/prisma.js";

describe("Comments Routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("GET /api/comments/creations/:id/comments", () => {
    it("should return comments for a creation", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockCreation = createMockCreation(mockUser.id);
      const mockComment = createMockComment(mockUser.id, mockCreation.id);

      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        id: mockCreation.id,
        status: "published",
      } as any);
      vi.mocked(prisma.comment.count).mockResolvedValue(1);
      vi.mocked(prisma.comment.findMany).mockResolvedValue([
        {
          ...mockComment,
          author: {
            id: mockUser.id,
            username: mockUser.username,
            displayName: mockUser.displayName,
            avatarEmoji: mockUser.avatarEmoji,
            avatarUrl: mockUser.avatarUrl,
            isVerified: mockUser.isVerified,
          },
        },
      ] as any);

      const response = await app.inject({
        method: "GET",
        url: `/api/comments/creations/${mockCreation.id}/comments`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.data).toHaveLength(1);
      expect(body.data[0].body).toBe("Test comment");
      expect(body.meta.total).toBe(1);

      await app.close();
    });

    it("should return 404 for non-existent creation", async () => {
      const app = await buildApp();

      vi.mocked(prisma.creation.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "GET",
        url: "/api/comments/creations/123e4567-e89b-12d3-a456-426614174000/comments",
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });

    it("should return 404 for unpublished creation", async () => {
      const app = await buildApp();

      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        id: "123",
        status: "draft",
      } as any);

      const response = await app.inject({
        method: "GET",
        url: "/api/comments/creations/123e4567-e89b-12d3-a456-426614174000/comments",
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });
  });

  describe("POST /api/comments/creations/:id/comments", () => {
    it("should add a comment", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);
      const mockComment = createMockComment(mockUser.id, mockCreation.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        id: mockCreation.id,
        status: "published",
      } as any);
      vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
        return callback({
          comment: {
            create: vi.fn().mockResolvedValue({
              ...mockComment,
              author: {
                id: mockUser.id,
                username: mockUser.username,
                displayName: mockUser.displayName,
                avatarEmoji: mockUser.avatarEmoji,
                avatarUrl: mockUser.avatarUrl,
                isVerified: mockUser.isVerified,
              },
            }),
            update: vi.fn(),
          },
          creation: {
            update: vi.fn(),
          },
        });
      });

      const response = await app.inject({
        method: "POST",
        url: `/api/comments/creations/${mockCreation.id}/comments`,
        cookies: {
          session: mockSession.token,
        },
        payload: {
          body: "Test comment",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.comment.body).toBe("Test comment");

      await app.close();
    });

    it("should reject without auth", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "POST",
        url: "/api/comments/creations/123e4567-e89b-12d3-a456-426614174000/comments",
        payload: {
          body: "Test comment",
        },
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });

    it("should reject empty body", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);

      const response = await app.inject({
        method: "POST",
        url: "/api/comments/creations/123e4567-e89b-12d3-a456-426614174000/comments",
        cookies: {
          session: mockSession.token,
        },
        payload: {
          body: "",
        },
      });

      expect(response.statusCode).toBe(400);

      await app.close();
    });

    it("should add a reply to existing comment", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);
      const parentComment = createMockComment(mockUser.id, mockCreation.id, {
        id: "553e4567-e89b-12d3-a456-426614174004",
      });
      const replyComment = createMockComment(mockUser.id, mockCreation.id, {
        id: "663e4567-e89b-12d3-a456-426614174005",
        parentId: parentComment.id,
      });

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.creation.findUnique).mockResolvedValue({
        id: mockCreation.id,
        status: "published",
      } as any);
      vi.mocked(prisma.comment.findUnique).mockResolvedValue({
        id: parentComment.id,
        creationId: mockCreation.id,
      } as any);
      vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
        return callback({
          comment: {
            create: vi.fn().mockResolvedValue({
              ...replyComment,
              author: {
                id: mockUser.id,
                username: mockUser.username,
                displayName: mockUser.displayName,
                avatarEmoji: mockUser.avatarEmoji,
                avatarUrl: mockUser.avatarUrl,
                isVerified: mockUser.isVerified,
              },
            }),
            update: vi.fn(),
          },
          creation: {
            update: vi.fn(),
          },
        });
      });

      const response = await app.inject({
        method: "POST",
        url: `/api/comments/creations/${mockCreation.id}/comments`,
        cookies: {
          session: mockSession.token,
        },
        payload: {
          body: "Reply comment",
          parentId: parentComment.id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.comment.parentId).toBe(parentComment.id);

      await app.close();
    });
  });

  describe("DELETE /api/comments/:commentId", () => {
    it("should delete own comment", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(mockUser.id);
      const mockComment = createMockComment(mockUser.id, mockCreation.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.comment.findUnique).mockResolvedValue({
        id: mockComment.id,
        authorId: mockUser.id,
        creationId: mockCreation.id,
        parentId: null,
      } as any);
      vi.mocked(prisma.$transaction).mockResolvedValue(undefined);

      const response = await app.inject({
        method: "DELETE",
        url: `/api/comments/${mockComment.id}`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Comment deleted");

      await app.close();
    });

    it("should reject deleting other user's comment", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const otherUser = createMockUser({ id: "other-user-id" });
      const mockSession = createMockSession(mockUser.id);
      const mockCreation = createMockCreation(otherUser.id);
      const mockComment = createMockComment(otherUser.id, mockCreation.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.comment.findUnique).mockResolvedValue({
        id: mockComment.id,
        authorId: otherUser.id,
        creationId: mockCreation.id,
        parentId: null,
      } as any);

      const response = await app.inject({
        method: "DELETE",
        url: `/api/comments/${mockComment.id}`,
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(403);

      await app.close();
    });

    it("should return 404 for non-existent comment", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.comment.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "DELETE",
        url: "/api/comments/123e4567-e89b-12d3-a456-426614174000",
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(404);

      await app.close();
    });
  });
});
