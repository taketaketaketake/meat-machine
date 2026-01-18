# Testing Guide

This document explains the testing strategy, structure, and coverage for the Meat-Machine API.

## Overview

The API uses **Vitest** as the test framework with **mocked Prisma** for database interactions. Tests are unit/integration tests that verify route handlers, validation, authentication, and business logic without requiring a real database connection.

## Why Test?

1. **Confidence in Changes**: Tests catch regressions when modifying code
2. **Documentation**: Tests serve as executable documentation of expected behavior
3. **Design Feedback**: Writing tests often reveals design issues early
4. **Safe Refactoring**: Comprehensive tests enable aggressive refactoring
5. **CI/CD Integration**: Automated tests prevent broken code from being deployed

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

```
src/
├── test/
│   ├── setup.ts          # Global test setup, Prisma mocks
│   └── helpers.ts         # Test utilities and mock factories
├── lib/
│   └── security.test.ts   # Security feature tests
└── routes/
    ├── auth.test.ts       # Auth endpoint tests
    ├── users.test.ts      # User endpoint tests
    ├── creations.test.ts  # Creation endpoint tests
    └── comments.test.ts   # Comment endpoint tests
```

## Testing Approach

### 1. Mocked Database

Prisma is mocked globally in `src/test/setup.ts`. This means:
- Tests don't need a real database
- Tests run fast (no I/O)
- Tests are isolated and deterministic
- Each test controls exactly what the "database" returns

```typescript
// Example: Mocking a user lookup
vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
```

### 2. Fastify Injection

Tests use Fastify's `inject()` method to simulate HTTP requests without starting a real server:

```typescript
const response = await app.inject({
  method: "POST",
  url: "/api/auth/login",
  payload: {
    email: "test@example.com",
    password: "password123",
  },
});

expect(response.statusCode).toBe(200);
```

### 3. Mock Factories

Helper functions create consistent mock data:

```typescript
// Creates a mock user with sensible defaults
const user = createMockUser({ isCreator: true });

// Creates a mock session for authentication
const session = createMockSession(user.id);

// Creates a mock creation
const creation = createMockCreation(user.id, { status: "published" });
```

### 4. Test Isolation

Each test:
- Builds a fresh Fastify app instance
- Clears all mocks via `vi.clearAllMocks()` in `beforeEach`
- Closes the app after completion

## What's Tested

**Total: 73 tests across 5 test files**

### Security (`security.test.ts`) - 19 tests

| Feature | Test Cases |
|---------|------------|
| CSRF - generateCsrfToken | Token generation, secure cookie in prod, non-secure in dev |
| CSRF - validateCsrf | Dev bypass, CSRF_ENABLED opt-in, missing cookie, missing header, token mismatch, token match |
| HTTPS Enforcement | Dev bypass, HTTP redirect in prod, HTTPS no-redirect, x-forwarded-ssl detection |
| Rate Limit Configs | Auth config (5/min), API config (100/min), write config (30/min), error responses |

**Key validations tested:**
- CSRF token generation (32-char nanoid)
- CSRF cookie settings (httpOnly: false, sameSite: strict)
- CSRF validation skipped in dev unless `CSRF_ENABLED=true`
- HTTPS enforcement only in production
- Rate limit error response format (429 status)

### Authentication (`auth.test.ts`) - 14 tests

| Endpoint | Test Cases |
|----------|------------|
| POST /register | Success, duplicate email, duplicate username, invalid email, short password, invalid username |
| POST /login | Success, wrong email, wrong password |
| POST /logout | Success, no session |
| GET /me | Success, expired session, no session |

**Key validations tested:**
- Email format validation
- Password minimum length (8 chars)
- Username character restrictions (alphanumeric, underscore, hyphen)
- Session expiry handling
- Password hashing verification

### Users (`users.test.ts`) - 8 tests

| Endpoint | Test Cases |
|----------|------------|
| GET /:username | Success, user not found |
| PATCH /me | Success, no auth, invalid URL fields |
| GET /:username/creations | Success, user not found, pagination |

**Key validations tested:**
- Public profile excludes sensitive fields (email, passwordHash)
- Profile updates require authentication
- URL fields validated (website, donationUrl)
- Pagination metadata accuracy

### Creations (`creations.test.ts`) - 22 tests

| Endpoint | Test Cases |
|----------|------------|
| GET / | Success, filter by contentType, sort by popularity |
| POST / | Success, no auth, missing required fields |
| GET /:id | Success, not found, unpublished by other user |
| PATCH /:id | Success, other user's creation, no auth, not found |
| DELETE /:id | Success, other user's creation |
| POST /:id/publish | Success, other user's creation |
| POST /:id/like | Success, already liked |
| DELETE /:id/like | Success, not previously liked, no auth |

**Key validations tested:**
- Ownership verification for mutations
- Draft creations hidden from other users
- Like idempotency (liking twice doesn't error)
- Content type enum validation
- Required fields (title, contentType, fileUrl)

### Comments (`comments.test.ts`) - 10 tests

| Endpoint | Test Cases |
|----------|------------|
| GET /creations/:id/comments | Success, creation not found, unpublished creation |
| POST /creations/:id/comments | Success, no auth, empty body, reply to existing |
| DELETE /:commentId | Success, other user's comment, not found |

**Key validations tested:**
- Comments only on published creations
- Nested replies (parentId)
- Ownership verification for deletion
- Comment body required and non-empty

## Coverage Report

Run `npm run test:coverage` to generate the latest coverage report.

```
-----------------|---------|----------|---------|---------|
File             | % Stmts | % Branch | % Funcs | % Lines |
-----------------|---------|----------|---------|---------|
All files        |   ~80   |    ~70   |   ~85   |   ~80   |
 src/lib         |         |          |         |         |
  auth.ts        |   85.71 |    62.50 |  100.00 |   85.71 |
  errors.ts      |   65.38 |    36.84 |   85.71 |   65.38 |
  schemas.ts     |  100.00 |   100.00 |  100.00 |  100.00 |
  security.ts    |   95.00 |    90.00 |  100.00 |   95.00 |
 src/routes      |         |          |         |         |
  auth.ts        |   97.29 |    87.50 |  100.00 |   97.29 |
  comments.ts    |   82.97 |    75.00 |   83.33 |   82.97 |
  creations.ts   |   76.85 |    73.07 |   66.66 |   76.66 |
  users.ts       |   96.42 |   100.00 |   85.71 |   96.29 |
-----------------|---------|----------|---------|---------|
```

### Coverage Notes

- **index.ts (0%)**: Entry point not tested - would require integration tests
- **prisma.ts (0%)**: Mocked in tests, singleton pattern not exercised
- **errors.ts (65%)**: Some error branches (Prisma errors) not hit in current tests
- **security.ts (95%)**: Well covered, minor branches for edge cases

## Test Patterns

### Testing Protected Routes

```typescript
it("should reject without auth", async () => {
  const response = await app.inject({
    method: "POST",
    url: "/api/creations",
    payload: { title: "Test" },
  });

  expect(response.statusCode).toBe(401);
});

it("should work with valid session", async () => {
  // Mock session lookup to return valid session with user
  vi.mocked(prisma.session.findUnique).mockResolvedValue({
    ...mockSession,
    user: mockUser,
  });

  const response = await app.inject({
    method: "POST",
    url: "/api/creations",
    cookies: { session: mockSession.token },
    payload: { /* ... */ },
  });

  expect(response.statusCode).toBe(201);
});
```

### Testing Ownership

```typescript
it("should reject modifying other user's resource", async () => {
  const mockUser = createMockUser();
  const otherUser = createMockUser({ id: "other-id" });

  // Auth as mockUser
  vi.mocked(prisma.session.findUnique).mockResolvedValue({
    ...createMockSession(mockUser.id),
    user: mockUser,
  });

  // Resource belongs to otherUser
  vi.mocked(prisma.creation.findUnique).mockResolvedValue({
    userId: otherUser.id,
  });

  const response = await app.inject({
    method: "DELETE",
    url: `/api/creations/${creationId}`,
    cookies: { session: "token" },
  });

  expect(response.statusCode).toBe(403);
});
```

### Testing Validation

```typescript
it("should reject invalid input", async () => {
  const response = await app.inject({
    method: "POST",
    url: "/api/auth/register",
    payload: {
      email: "not-an-email",  // Invalid
      username: "test user!", // Invalid characters
      password: "short",      // Too short
    },
  });

  expect(response.statusCode).toBe(400);
});
```

### Testing Security Features

```typescript
// Testing CSRF validation
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

// Testing HTTPS enforcement
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
```

## Adding New Tests

1. **Create test file** alongside route file: `routes/newfeature.test.ts`

2. **Import helpers**:
   ```typescript
   import { describe, it, expect, beforeEach, vi } from "vitest";
   import { buildApp, createMockUser, createMockSession } from "../test/helpers.js";
   import { prisma } from "../lib/prisma.js";
   ```

3. **Structure tests**:
   ```typescript
   describe("Feature Routes", () => {
     beforeEach(() => {
       vi.clearAllMocks();
     });

     describe("POST /api/feature", () => {
       it("should do something", async () => {
         const app = await buildApp();
         // ... test logic
         await app.close();
       });
     });
   });
   ```

4. **Add mock factory** if needed in `test/helpers.ts`

5. **Update Prisma mock** in `test/setup.ts` if using new models

## Limitations

1. **No real database testing**: Tests use mocks, so SQL queries aren't verified
2. **No end-to-end tests**: Would need Playwright or similar for full E2E
3. **Transaction mocking is simplified**: Complex transaction logic may not be fully tested
4. **No performance testing**: Load testing would require separate tooling

## Future Improvements

- [ ] Add integration tests with test database (e.g., using Docker)
- [ ] Add E2E tests for critical user flows
- [ ] Increase branch coverage for error handling paths
- [ ] Add performance/load testing
- [ ] Add contract testing for API consumers
