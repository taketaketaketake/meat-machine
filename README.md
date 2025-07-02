# Meat-Machine

**Meat-Machine** is a modern, visually-oriented web application built as a community platform for AI-generated content. It allows users to discover, create, and share content made with various AI tools. The platform is designed to be a "cozy corner of the internet for AI-generated awesomeness," emphasizing a warm and visual community experience.

### Key Features:

*   **Content Discovery:** Users can browse a gallery of AI-generated content, including videos, images, music, and more. The homepage features a curated selection of recent videos, trending tags, and top-voted creations.
*   **Creator Communities:** The platform highlights content creators, giving them dedicated channel pages to showcase their work and connect with their audience.
*   **AI Tool Integration:** The site acknowledges and categorizes content by the AI tools used to create it (e.g., Midjourney, OpenAI Sora, Suno, ElevenLabs).
*   **Community Engagement:** Features like voting, discussions (channels), and user profiles foster a sense of community.
*   **Content Upload:** Users can upload their own AI-generated content.
*   **Newsletter:** A weekly newsletter keeps users updated on the most inspiring creations, creator spotlights, and AI tool news.

### Tech Stack:

*   **Framework:** [Astro](https://astro.build/) is the primary web framework, chosen for its performance benefits and ability to mix and match different UI frameworks.
*   **UI Components:**
    *   **React:** Used for interactive components within the Astro application.
    *   **Radix UI:** A set of unstyled, accessible UI primitives for building the design system.
    *   **shadcn/ui (implied):** The use of `clsx`, `tailwind-merge`, and the structure of the UI components in `src/components/ui` strongly suggest the use of the `shadcn/ui` component library, which is built on top of Radix UI and Tailwind CSS.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) is used for styling, with a custom theme defined in `tailwind.config.js`.
*   **Backend & Database:** [Supabase](https://supabase.com/) is used for the backend, providing database, authentication, and storage solutions. The project includes scripts for managing Supabase database migrations and generating TypeScript types from the database schema.
*   **Deployment:** The application is configured for deployment on [Vercel](https://vercel.com/).
*   **Testing:**
    *   **Unit/Component Testing:** [Vitest](https://vitest.dev/) is used for running unit and component tests.
    *   **End-to-End Testing:** [Playwright](https://playwright.dev/) is used for end-to-end testing.
*   **State Management (Client-side):** [Zustand](https://zustand-demo.pmnd.rs/) is included for state management in React components.
*   **Linting & Formatting:** The project is set up with `astro check`, `tsc` for type checking, and `prettier` for code formatting.

## 🚀 Project Structure

The project follows a standard Astro project structure, with some key directories for application logic, testing, and configuration.

```text
/
├── public/              # Static assets (images, fonts, etc.)
├── src/                 # Application source code
│   ├── components/      # Reusable Astro and React components
│   ├── lib/             # Core logic, utilities, Supabase client
│   ├── pages/           # Site pages and API routes
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── __tests__/           # Vitest unit & component tests
├── e2e/                 # Playwright end-to-end tests
├── astro.config.mjs     # Astro configuration
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run test`            | Runs unit tests with Vitest                      |
| `npm run test:e2e`        | Runs end-to-end tests with Playwright            |
| `npm run test:all`        | Runs all unit and end-to-end tests               |
| `npm run lint`            | Type-checks the project with Astro and TypeScript|
| `npm run format`          | Formats all files with Prettier                  |
| `npm run db:start`        | Starts the local Supabase development environment|
| `npm run db:migrate`      | Applies database migrations                      |
| `npm run db:generate-types`| Generates TypeScript types from your database schema|