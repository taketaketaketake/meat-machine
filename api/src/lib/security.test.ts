import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  generateCsrfToken,
  validateCsrf,
  enforceHttps,
  rateLimitConfigs,
} from "./security.js";
import type { FastifyRequest, FastifyReply } from "fastify";

// Mock reply object
function createMockReply() {
  return {
    setCookie: vi.fn(),
    redirect: vi.fn(),
    header: vi.fn(),
  } as unknown as FastifyReply;
}

// Mock request object
function createMockRequest(overrides: Partial<FastifyRequest> = {}) {
  return {
    cookies: {},
    headers: {},
    socket: {},
    hostname: "localhost",
    url: "/test",
    ...overrides,
  } as unknown as FastifyRequest;
}

describe("CSRF Protection", () => {
  describe("generateCsrfToken", () => {
    it("should generate a token and set cookie", () => {
      const reply = createMockReply();

      const token = generateCsrfToken(reply);

      expect(token).toBeDefined();
      expect(token.length).toBe(32);
      expect(reply.setCookie).toHaveBeenCalledWith(
        "csrf_token",
        token,
        expect.objectContaining({
          path: "/",
          httpOnly: false,
          sameSite: "strict",
        })
      );
    });

    it("should set secure cookie in production", () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      const reply = createMockReply();
      generateCsrfToken(reply);

      expect(reply.setCookie).toHaveBeenCalledWith(
        "csrf_token",
        expect.any(String),
        expect.objectContaining({
          secure: true,
        })
      );

      process.env.NODE_ENV = originalEnv;
    });

    it("should not set secure cookie in development", () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "development";

      const reply = createMockReply();
      generateCsrfToken(reply);

      expect(reply.setCookie).toHaveBeenCalledWith(
        "csrf_token",
        expect.any(String),
        expect.objectContaining({
          secure: false,
        })
      );

      process.env.NODE_ENV = originalEnv;
    });
  });

  describe("validateCsrf", () => {
    beforeEach(() => {
      // Reset environment
      delete process.env.CSRF_ENABLED;
    });

    it("should skip validation in development without CSRF_ENABLED", async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "development";

      const request = createMockRequest();
      const reply = createMockReply();

      // Should not throw even without tokens
      await expect(validateCsrf(request, reply)).resolves.toBeUndefined();

      process.env.NODE_ENV = originalEnv;
    });

    it("should validate when CSRF_ENABLED is set in development", async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "development";
      process.env.CSRF_ENABLED = "true";

      const request = createMockRequest();
      const reply = createMockReply();

      await expect(validateCsrf(request, reply)).rejects.toThrow(
        "CSRF token missing"
      );

      process.env.NODE_ENV = originalEnv;
      delete process.env.CSRF_ENABLED;
    });

    it("should throw if cookie token is missing in production", async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      const request = createMockRequest({
        cookies: {},
        headers: { "x-csrf-token": "header-token" },
      });
      const reply = createMockReply();

      await expect(validateCsrf(request, reply)).rejects.toThrow(
        "CSRF token missing"
      );

      process.env.NODE_ENV = originalEnv;
    });

    it("should throw if header token is missing in production", async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      const request = createMockRequest({
        cookies: { csrf_token: "cookie-token" },
        headers: {},
      });
      const reply = createMockReply();

      await expect(validateCsrf(request, reply)).rejects.toThrow(
        "CSRF token missing"
      );

      process.env.NODE_ENV = originalEnv;
    });

    it("should throw if tokens do not match in production", async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      const request = createMockRequest({
        cookies: { csrf_token: "cookie-token" },
        headers: { "x-csrf-token": "different-token" },
      });
      const reply = createMockReply();

      await expect(validateCsrf(request, reply)).rejects.toThrow(
        "CSRF token mismatch"
      );

      process.env.NODE_ENV = originalEnv;
    });

    it("should pass if tokens match in production", async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      const token = "matching-token-12345";
      const request = createMockRequest({
        cookies: { csrf_token: token },
        headers: { "x-csrf-token": token },
      });
      const reply = createMockReply();

      await expect(validateCsrf(request, reply)).resolves.toBeUndefined();

      process.env.NODE_ENV = originalEnv;
    });
  });
});

describe("HTTPS Enforcement", () => {
  it("should skip enforcement in development", async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const request = createMockRequest();
    const reply = createMockReply();

    await enforceHttps(request, reply);

    expect(reply.redirect).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });

  it("should redirect HTTP to HTTPS in production", async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const request = createMockRequest({
      headers: { host: "example.com", "x-forwarded-proto": "http" },
      url: "/test",
    });
    const reply = createMockReply();

    await enforceHttps(request, reply);

    expect(reply.redirect).toHaveBeenCalledWith("https://example.com/test");

    process.env.NODE_ENV = originalEnv;
  });

  it("should not redirect if already HTTPS in production", async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const request = createMockRequest({
      headers: { host: "example.com", "x-forwarded-proto": "https" },
      url: "/test",
    });
    const reply = createMockReply();

    await enforceHttps(request, reply);

    expect(reply.redirect).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });

  it("should detect HTTPS via x-forwarded-ssl header", async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const request = createMockRequest({
      headers: { host: "example.com", "x-forwarded-ssl": "on" },
      url: "/test",
    });
    const reply = createMockReply();

    await enforceHttps(request, reply);

    expect(reply.redirect).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });
});

describe("Rate Limit Configurations", () => {
  it("should have auth rate limit config", () => {
    expect(rateLimitConfigs.auth).toBeDefined();
    expect(rateLimitConfigs.auth.max).toBe(5);
    expect(rateLimitConfigs.auth.timeWindow).toBe("1 minute");
  });

  it("should have api rate limit config", () => {
    expect(rateLimitConfigs.api).toBeDefined();
    expect(rateLimitConfigs.api.max).toBe(100);
    expect(rateLimitConfigs.api.timeWindow).toBe("1 minute");
  });

  it("should have write rate limit config", () => {
    expect(rateLimitConfigs.write).toBeDefined();
    expect(rateLimitConfigs.write.max).toBe(30);
    expect(rateLimitConfigs.write.timeWindow).toBe("1 minute");
  });

  it("should return proper error response for auth rate limit", () => {
    const response = rateLimitConfigs.auth.errorResponseBuilder();
    expect(response.statusCode).toBe(429);
    expect(response.error).toBe("TooManyRequests");
    expect(response.message).toContain("login attempts");
  });

  it("should return proper error response for api rate limit", () => {
    const response = rateLimitConfigs.api.errorResponseBuilder();
    expect(response.statusCode).toBe(429);
    expect(response.error).toBe("TooManyRequests");
    expect(response.message).toContain("Rate limit exceeded");
  });

  it("should return proper error response for write rate limit", () => {
    const response = rateLimitConfigs.write.errorResponseBuilder();
    expect(response.statusCode).toBe(429);
    expect(response.error).toBe("TooManyRequests");
    expect(response.message).toContain("write operations");
  });
});
