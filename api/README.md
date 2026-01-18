# Meat-Machine API

Backend API for the Meat-Machine AI Content Platform.

## Tech Stack

- **Runtime:** Node.js 20+
- **Framework:** Fastify 5
- **Database:** PostgreSQL (via Prisma)
- **Language:** TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Edit .env with your database URL

# Generate Prisma client
npm run db:generate

# Push schema to database (no migrations!)
npm run db:push

# Seed initial data
npm run db:seed

# Start development server
npm run dev
```

## Database Workflow

This project uses `prisma db push` instead of migrations:

```bash
# Sync schema changes to database
npm run db:push

# Force push (accepts data loss - use carefully!)
npm run db:push:force

# Reset database and reseed
npm run db:reset

# Open Prisma Studio (database GUI)
npm run db:studio
```

### Recommended: Database Branching

For production-safe development, use a database provider with branching:

- **Neon** (recommended): https://neon.tech
- **PlanetScale**: https://planetscale.com

Workflow:
```bash
# Create a branch for your feature
neon branch create --name feature-new-schema

# Point to the branch and push changes
DATABASE_URL=<branch-url> npm run db:push

# Test, then merge to main
neon branch merge feature-new-schema --into main
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run db:push` | Sync Prisma schema to database |
| `npm run db:studio` | Open Prisma Studio GUI |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:seed` | Seed database with initial data |
| `npm run db:reset` | Reset DB and reseed |
| `npm run lint` | TypeScript type check |
| `npm run format` | Format code with Prettier |

## Project Structure

```
meat-machine-api/
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Seed data
├── src/
│   ├── index.ts         # Entry point
│   ├── routes/          # API route handlers (TODO)
│   ├── services/        # Business logic (TODO)
│   ├── middleware/      # Fastify middleware (TODO)
│   └── utils/           # Utilities (TODO)
├── package.json
├── tsconfig.json
└── .env.example
```

## API Endpoints (Planned)

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Current user

### Users
- `GET /api/users/:username` - Public profile
- `PATCH /api/users/me` - Update profile
- `POST /api/users/:username/follow` - Follow user

### Creations
- `GET /api/creations` - List content
- `POST /api/creations` - Create content
- `GET /api/creations/:id` - Get single
- `POST /api/creations/:id/like` - Like content

### Discussions
- `GET /api/channels` - List channels
- `GET /api/channels/:id/threads` - Threads in channel
- `POST /api/threads` - Create thread

### Community
- `GET /api/rooms` - List rooms
- `POST /api/rooms/:id/join` - Join room
- `GET /api/rooms/:id/posts` - Room posts

### Search
- `GET /api/search?q=query` - Global search

## Environment Variables

See `.env.example` for all available configuration options.

Required:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for signing tokens

## License

Private - All rights reserved
