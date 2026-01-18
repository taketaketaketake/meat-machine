# Meat-Machine API

Backend REST API for the Meat-Machine AI Content Platform.

> **Backend only** - No frontend code. This API is designed to be consumed by a separate frontend application.

## Tech Stack

- **Runtime:** Node.js 20+
- **Framework:** Fastify 5
- **Database:** PostgreSQL via Prisma ORM
- **Auth:** Session-based (cookies)
- **Validation:** Zod
- **Testing:** Vitest
- **Language:** TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file and configure
cp .env.example .env
# Edit .env with your DATABASE_URL

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed initial data (AI tools, channels, tags, etc.)
npm run db:seed

# Start development server
npm run dev
```

Server runs at `http://localhost:3000`

## API Endpoints

### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API info |
| GET | `/health` | Health check |

### Authentication
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Create account |
| POST | `/api/auth/login` | No | Login (sets session cookie) |
| POST | `/api/auth/logout` | Yes | Logout (clears session) |
| GET | `/api/auth/me` | Yes | Get current user |

### Users
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/users/:username` | No | Get public profile |
| PATCH | `/api/users/me` | Yes | Update own profile |
| GET | `/api/users/:username/creations` | No | List user's creations |

### Creations
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/creations` | No | List/feed with filters |
| POST | `/api/creations` | Yes | Create new (draft) |
| GET | `/api/creations/:id` | No | Get single creation |
| PATCH | `/api/creations/:id` | Yes | Update (owner only) |
| DELETE | `/api/creations/:id` | Yes | Delete (owner only) |
| POST | `/api/creations/:id/publish` | Yes | Publish draft |
| POST | `/api/creations/:id/like` | Yes | Like |
| DELETE | `/api/creations/:id/like` | Yes | Unlike |

### Comments
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/comments/creations/:id/comments` | No | List comments |
| POST | `/api/comments/creations/:id/comments` | Yes | Add comment |
| DELETE | `/api/comments/:commentId` | Yes | Delete (owner only) |

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run db:push` | Sync Prisma schema to database |
| `npm run db:studio` | Open Prisma Studio GUI |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:seed` | Seed database with initial data |
| `npm run db:reset` | Reset DB and reseed |
| `npm run lint` | TypeScript type check |
| `npm run format` | Format code with Prettier |

## Project Structure

```
api/
├── prisma/
│   ├── schema.prisma       # Database schema (600+ lines)
│   └── seed.ts             # Seed data (AI tools, channels, tags)
├── src/
│   ├── index.ts            # Entry point, route registration
│   ├── types.ts            # TypeScript type augmentations
│   ├── lib/
│   │   ├── auth.ts         # Session management, auth hooks
│   │   ├── errors.ts       # Error classes, global handler
│   │   ├── prisma.ts       # Prisma client singleton
│   │   └── schemas.ts      # Shared Zod schemas, pagination
│   ├── routes/
│   │   ├── auth.ts         # Auth endpoints
│   │   ├── users.ts        # User endpoints
│   │   ├── creations.ts    # Creation endpoints
│   │   └── comments.ts     # Comment endpoints
│   └── test/
│       ├── setup.ts        # Test setup, Prisma mocks
│       └── helpers.ts      # Mock factories, test utilities
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── TESTING.md              # Testing documentation
└── .env.example
```

## Database

### Schema Overview

The Prisma schema includes models for:
- **Users** - Profiles, auth, OAuth accounts, sessions
- **Creations** - Content (video, photo, audio, article) with AI metadata
- **Comments** - Polymorphic comments on creations
- **Likes** - Polymorphic likes on creations/comments
- **Tags** - Content categorization
- **AI Tools** - Reference data (Midjourney, DALL-E, etc.)
- **Channels/Threads** - Discussion system (not yet implemented)
- **Community Rooms** - Community features (not yet implemented)

### Workflow

This project uses `prisma db push` (no migration files):

```bash
# Sync schema changes to database
npm run db:push

# Force push (accepts data loss)
npm run db:push:force

# Reset and reseed
npm run db:reset

# Open database GUI
npm run db:studio
```

### Recommended: Database Branching

For safe development, use a provider with branching:
- **Neon** (recommended): https://neon.tech
- **Supabase**: https://supabase.com

## Testing

54 tests covering all endpoints. See [TESTING.md](./TESTING.md) for details.

```bash
npm test                 # Run once
npm run test:watch       # Watch mode
npm run test:coverage    # With coverage report
```

## Environment Variables

Required:
```env
DATABASE_URL=postgresql://user:pass@localhost:5432/meatmachine
```

Optional:
```env
PORT=3000
HOST=0.0.0.0
NODE_ENV=development
FRONTEND_URL=http://localhost:4321
```

See `.env.example` for all options including OAuth and file storage configuration.

## Future Features (Schema Ready)

The database schema supports these features, not yet implemented as API routes:
- Follow/unfollow users
- Discussion channels and threads
- Community rooms and posts
- Collections and playlists
- View analytics
- OAuth providers (Google, GitHub)

## License

Private - All rights reserved
