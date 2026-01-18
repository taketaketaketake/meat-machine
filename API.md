# API Documentation

Complete reference for the Meat-Machine REST API.

## Base URL

```
http://localhost:3000
```

## Architecture

### Request/Response Format

- **Content-Type:** `application/json`
- **Authentication:** Session cookie (`session`)
- **IDs:** UUID v4 format

### Standard Response Structure

**Success (single item):**
```json
{
  "user": { ... }
}
```

**Success (list with pagination):**
```json
{
  "data": [ ... ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasMore": true
  }
}
```

**Error:**
```json
{
  "error": "NotFoundError",
  "message": "Resource not found",
  "statusCode": 404
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Validation error |
| 401 | Unauthorized (not logged in) |
| 403 | Forbidden (not owner) |
| 404 | Not found |
| 409 | Conflict (duplicate) |
| 500 | Server error |

---

## Authentication

Session-based authentication using HTTP-only cookies.

### How It Works

1. Client sends `POST /api/auth/login` with credentials
2. Server validates and creates a session in the database
3. Server sets `session` cookie (httpOnly, secure in production)
4. Client automatically sends cookie with subsequent requests
5. Server validates session on protected routes

### Cookie Settings

```
Name: session
HttpOnly: true
Secure: true (production only)
SameSite: lax
MaxAge: 30 days
Path: /
```

---

## Endpoints

### Health Check

#### `GET /`

Returns API information.

**Response:**
```json
{
  "name": "Meat-Machine API",
  "version": "1.0.0",
  "description": "Backend API for AI Content Platform",
  "endpoints": {
    "health": "/health",
    "auth": "/api/auth/*",
    "users": "/api/users/*",
    "creations": "/api/creations/*",
    "comments": "/api/comments/*"
  }
}
```

#### `GET /health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

### Auth Routes

Base path: `/api/auth`

#### `POST /api/auth/register`

Create a new account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "securepassword123",
  "displayName": "John Doe"  // optional
}
```

**Validation:**
| Field | Rules |
|-------|-------|
| email | Valid email, max 255 chars |
| username | 3-50 chars, alphanumeric + underscore + hyphen only |
| password | 8-100 chars |
| displayName | Max 100 chars (optional) |

**Response (201):**
```json
{
  "message": "Registration successful",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "johndoe",
    "displayName": "John Doe",
    "avatarEmoji": "👤",
    "isCreator": false,
    "isVerified": false,
    "followersCount": 0,
    "creationsCount": 0,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Errors:**
- `409` - Email already registered
- `409` - Username already taken
- `400` - Validation failed

---

#### `POST /api/auth/login`

Login to existing account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": { ... }
}
```

Sets `session` cookie in response headers.

**Errors:**
- `401` - Invalid email or password

---

#### `POST /api/auth/logout`

Logout current session.

**Auth Required:** Yes

**Response (200):**
```json
{
  "message": "Logout successful"
}
```

Clears `session` cookie.

---

#### `GET /api/auth/me`

Get current authenticated user.

**Auth Required:** Yes

**Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "johndoe",
    ...
  }
}
```

**Errors:**
- `401` - No session or expired session

---

### User Routes

Base path: `/api/users`

#### `GET /api/users/:username`

Get public profile by username.

**Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "username": "johndoe",
    "displayName": "John Doe",
    "avatarEmoji": "👤",
    "avatarUrl": null,
    "bio": "Artist and AI enthusiast",
    "website": "https://example.com",
    "isCreator": true,
    "isVerified": false,
    "followersCount": 150,
    "followingCount": 42,
    "creationsCount": 28,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

Note: `email` and `passwordHash` are excluded from public profiles.

**Errors:**
- `404` - User not found

---

#### `PATCH /api/users/me`

Update own profile.

**Auth Required:** Yes

**Request Body (all fields optional):**
```json
{
  "displayName": "New Name",
  "bio": "Updated bio",
  "bioLong": "Extended biography...",
  "avatarEmoji": "🎨",
  "avatarUrl": "https://example.com/avatar.jpg",
  "website": "https://mysite.com",
  "donationUrl": "https://ko-fi.com/user",
  "specialty": "AI Art",
  "specialtyColor": "purple",
  "bannerGradient": "from-purple-500 to-pink-500",
  "socialLinks": {
    "twitter": "username",
    "instagram": "username"
  }
}
```

**Validation:**
| Field | Rules |
|-------|-------|
| displayName | Max 100 chars |
| bio | Max 500 chars |
| bioLong | Max 5000 chars |
| avatarEmoji | Max 10 chars |
| avatarUrl | Valid URL or null |
| website | Valid URL or null |
| donationUrl | Valid URL or null |

**Response (200):**
```json
{
  "user": { ... }
}
```

---

#### `GET /api/users/:username/creations`

Get user's published creations.

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 20 | Items per page (max 100) |

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "My AI Art",
      "contentType": "photo",
      "thumbnailUrl": "https://...",
      "likesCount": 42,
      "user": {
        "id": "uuid",
        "username": "johndoe",
        "displayName": "John Doe",
        "avatarEmoji": "👤"
      },
      "tags": [
        { "id": "cyberpunk", "name": "#cyberpunk" }
      ]
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 28,
    "totalPages": 2,
    "hasMore": true
  }
}
```

---

### Creation Routes

Base path: `/api/creations`

#### `GET /api/creations`

List published creations (feed).

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 20 | Items per page (max 100) |
| contentType | enum | - | Filter: video, photo, audio, article |
| userId | uuid | - | Filter by creator |
| toolUsed | string | - | Filter by AI tool (e.g., "midjourney") |
| sortBy | enum | recent | Sort: recent, popular, views |

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Cyberpunk City",
      "description": "A neon-lit cityscape",
      "contentType": "photo",
      "status": "published",
      "fileUrl": "https://...",
      "thumbnailUrl": "https://...",
      "prompt": "cyberpunk city, neon lights, rain",
      "toolUsed": "midjourney",
      "parameters": "--ar 16:9 --style raw",
      "viewsCount": 1250,
      "likesCount": 89,
      "commentsCount": 12,
      "publishedAt": "2024-01-15T10:30:00.000Z",
      "user": { ... },
      "tags": [ ... ],
      "isLiked": false
    }
  ],
  "meta": { ... }
}
```

Note: `isLiked` is included when authenticated.

---

#### `POST /api/creations`

Create a new creation (starts as draft).

**Auth Required:** Yes

**Request Body:**
```json
{
  "title": "My AI Art",
  "description": "Created with Midjourney",
  "contentType": "photo",
  "fileUrl": "https://example.com/image.jpg",
  "thumbnailUrl": "https://example.com/thumb.jpg",
  "prompt": "fantasy landscape, mountains",
  "toolUsed": "midjourney",
  "parameters": "--ar 16:9",
  "category": "landscape",
  "tags": ["fantasy", "landscape", "mountains"]
}
```

**Validation:**
| Field | Rules |
|-------|-------|
| title | Required, 1-255 chars |
| description | Max 5000 chars |
| contentType | Required: video, photo, audio, article |
| fileUrl | Required, valid URL |
| thumbnailUrl | Valid URL or null |
| prompt | Max 10000 chars |
| toolUsed | Max 100 chars |
| parameters | Max 1000 chars |
| category | Max 100 chars |
| tags | Array of strings, max 10 items |

**Response (201):**
```json
{
  "creation": {
    "id": "uuid",
    "status": "draft",
    ...
  }
}
```

---

#### `GET /api/creations/:id`

Get a single creation.

**Response (200):**
```json
{
  "creation": {
    "id": "uuid",
    "title": "My AI Art",
    ...
    "user": {
      "id": "uuid",
      "username": "johndoe",
      "bio": "Artist"
    }
  }
}
```

Note: Increments view count. Draft creations only visible to owner.

**Errors:**
- `404` - Not found or not published (and not owner)

---

#### `PATCH /api/creations/:id`

Update a creation.

**Auth Required:** Yes (owner only)

**Request Body:** Same as POST, all fields optional.

**Response (200):**
```json
{
  "creation": { ... }
}
```

**Errors:**
- `403` - Not the owner
- `404` - Not found

---

#### `DELETE /api/creations/:id`

Delete a creation.

**Auth Required:** Yes (owner only)

**Response (200):**
```json
{
  "message": "Creation deleted"
}
```

**Errors:**
- `403` - Not the owner
- `404` - Not found

---

#### `POST /api/creations/:id/publish`

Publish a draft creation.

**Auth Required:** Yes (owner only)

**Response (200):**
```json
{
  "creation": {
    "status": "published",
    "publishedAt": "2024-01-15T10:30:00.000Z",
    ...
  }
}
```

**Errors:**
- `403` - Not the owner
- `404` - Not found

---

#### `POST /api/creations/:id/like`

Like a creation.

**Auth Required:** Yes

**Response (200):**
```json
{
  "message": "Liked"
}
```

Or if already liked:
```json
{
  "message": "Already liked"
}
```

**Errors:**
- `404` - Creation not found or not published

---

#### `DELETE /api/creations/:id/like`

Unlike a creation.

**Auth Required:** Yes

**Response (200):**
```json
{
  "message": "Unliked"
}
```

Or if not previously liked:
```json
{
  "message": "Not liked"
}
```

---

### Comment Routes

Base path: `/api/comments`

#### `GET /api/comments/creations/:id/comments`

List comments on a creation.

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 20 | Items per page (max 100) |

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid",
      "body": "This is amazing!",
      "parentId": null,
      "likesCount": 5,
      "repliesCount": 2,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "author": {
        "id": "uuid",
        "username": "janedoe",
        "displayName": "Jane Doe",
        "avatarEmoji": "🎨"
      }
    }
  ],
  "meta": { ... }
}
```

Note: Comments are returned flat. Use `parentId` to build thread structure client-side.

**Errors:**
- `404` - Creation not found or not published

---

#### `POST /api/comments/creations/:id/comments`

Add a comment to a creation.

**Auth Required:** Yes

**Request Body:**
```json
{
  "body": "Great work!",
  "parentId": "uuid"  // optional, for replies
}
```

**Validation:**
| Field | Rules |
|-------|-------|
| body | Required, 1-5000 chars |
| parentId | Valid UUID of existing comment (optional) |

**Response (201):**
```json
{
  "comment": {
    "id": "uuid",
    "body": "Great work!",
    "parentId": null,
    "author": { ... },
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Errors:**
- `404` - Creation not found or not published
- `404` - Parent comment not found

---

#### `DELETE /api/comments/:commentId`

Delete a comment.

**Auth Required:** Yes (owner only)

**Response (200):**
```json
{
  "message": "Comment deleted"
}
```

**Errors:**
- `403` - Not the owner
- `404` - Comment not found

---

## Code Patterns

All routes follow consistent patterns:

### 1. Validation First

```typescript
const body = schema.parse(request.body);
const query = schema.parse(request.query);
const { id } = paramsSchema.parse(request.params);
```

Zod schemas validate and parse input. Invalid input throws automatically, caught by error handler.

### 2. Authentication Hooks

```typescript
// Requires valid session
fastify.post("/", { preHandler: requireAuth }, handler);

// Optional - attaches user if logged in
fastify.get("/", { preHandler: optionalAuth }, handler);
```

### 3. Ownership Verification

```typescript
const resource = await prisma.resource.findUnique({ where: { id } });
if (!resource) throw new NotFoundError();
if (resource.userId !== request.user.id) throw new ForbiddenError();
```

### 4. Pagination

```typescript
const query = paginationSchema.parse(request.query);
const total = await prisma.resource.count({ where });
const { skip, take, meta } = paginate(query, total);
const data = await prisma.resource.findMany({ where, skip, take });
return { data, meta };
```

### 5. Sensitive Field Stripping

```typescript
function toPublicUser(user: User) {
  const { passwordHash, email, ...publicUser } = user;
  return publicUser;
}
```

---

## Error Handling

All errors return consistent JSON:

```json
{
  "error": "ErrorType",
  "message": "Human readable message",
  "statusCode": 400
}
```

Custom error classes:
- `NotFoundError` (404)
- `UnauthorizedError` (401)
- `ForbiddenError` (403)
- `ConflictError` (409)
- `ValidationError` (400)

Zod validation errors return:
```json
{
  "error": "ValidationError",
  "message": "Validation failed",
  "statusCode": 400,
  "details": [ ... ]
}
```
