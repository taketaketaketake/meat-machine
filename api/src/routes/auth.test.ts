import { describe, it, expect, beforeEach, vi } from "vitest";
import { buildApp, createMockUser, createMockSession } from "../test/helpers.js";
import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";

describe("Auth Routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();

      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);
      vi.mocked(prisma.user.create).mockResolvedValue(mockUser);
      vi.mocked(prisma.session.create).mockResolvedValue(
        createMockSession(mockUser.id)
      );

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/register",
        payload: {
          email: "test@example.com",
          username: "testuser",
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Registration successful");
      expect(body.user.username).toBe("testuser");
      expect(body.user.passwordHash).toBeUndefined();
      expect(response.headers["set-cookie"]).toBeDefined();

      await app.close();
    });

    it("should reject duplicate email", async () => {
      const app = await buildApp();
      const existingUser = createMockUser();

      vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(existingUser);

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/register",
        payload: {
          email: "test@example.com",
          username: "newuser",
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(409);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Email already registered");

      await app.close();
    });

    it("should reject duplicate username", async () => {
      const app = await buildApp();
      const existingUser = createMockUser();

      vi.mocked(prisma.user.findUnique)
        .mockResolvedValueOnce(null) // email check
        .mockResolvedValueOnce(existingUser); // username check

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/register",
        payload: {
          email: "new@example.com",
          username: "testuser",
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(409);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Username already taken");

      await app.close();
    });

    it("should reject invalid email", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/register",
        payload: {
          email: "not-an-email",
          username: "testuser",
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(400);

      await app.close();
    });

    it("should reject short password", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/register",
        payload: {
          email: "test@example.com",
          username: "testuser",
          password: "short",
        },
      });

      expect(response.statusCode).toBe(400);

      await app.close();
    });

    it("should reject invalid username characters", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/register",
        payload: {
          email: "test@example.com",
          username: "test user!", // spaces and special chars not allowed
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(400);

      await app.close();
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login with valid credentials", async () => {
      const app = await buildApp();
      const hashedPassword = await bcrypt.hash("password123", 12);
      const mockUser = createMockUser({ passwordHash: hashedPassword });

      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(prisma.session.create).mockResolvedValue(
        createMockSession(mockUser.id)
      );

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/login",
        payload: {
          email: "test@example.com",
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Login successful");
      expect(body.user.email).toBe("test@example.com");
      expect(response.headers["set-cookie"]).toBeDefined();

      await app.close();
    });

    it("should reject invalid email", async () => {
      const app = await buildApp();

      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/login",
        payload: {
          email: "wrong@example.com",
          password: "password123",
        },
      });

      expect(response.statusCode).toBe(401);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Invalid email or password");

      await app.close();
    });

    it("should reject wrong password", async () => {
      const app = await buildApp();
      const hashedPassword = await bcrypt.hash("password123", 12);
      const mockUser = createMockUser({ passwordHash: hashedPassword });

      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/login",
        payload: {
          email: "test@example.com",
          password: "wrongpassword",
        },
      });

      expect(response.statusCode).toBe(401);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Invalid email or password");

      await app.close();
    });
  });

  describe("POST /api/auth/logout", () => {
    it("should logout with valid session", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.session.deleteMany).mockResolvedValue({ count: 1 });

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/logout",
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe("Logout successful");

      await app.close();
    });

    it("should reject without session", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "POST",
        url: "/api/auth/logout",
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });
  });

  describe("GET /api/auth/me", () => {
    it("should return current user", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const mockSession = createMockSession(mockUser.id);

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...mockSession,
        user: mockUser,
      } as any);

      const response = await app.inject({
        method: "GET",
        url: "/api/auth/me",
        cookies: {
          session: mockSession.token,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.user.username).toBe("testuser");
      expect(body.user.email).toBe("test@example.com");
      expect(body.user.passwordHash).toBeUndefined();

      await app.close();
    });

    it("should reject expired session", async () => {
      const app = await buildApp();
      const mockUser = createMockUser();
      const expiredSession = createMockSession(mockUser.id, {
        expiresAt: new Date(Date.now() - 1000), // expired
      });

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        ...expiredSession,
        user: mockUser,
      } as any);
      vi.mocked(prisma.session.delete).mockResolvedValue(expiredSession as any);

      const response = await app.inject({
        method: "GET",
        url: "/api/auth/me",
        cookies: {
          session: expiredSession.token,
        },
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });

    it("should reject without session", async () => {
      const app = await buildApp();

      const response = await app.inject({
        method: "GET",
        url: "/api/auth/me",
      });

      expect(response.statusCode).toBe(401);

      await app.close();
    });
  });
});
