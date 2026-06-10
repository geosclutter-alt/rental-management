# Rental Manager

A rental property management app. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui, backed by Supabase (Postgres + auth) and hosted on Cloudflare Pages.

See [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md) for the project plan and [docs/CHANGELOG.md](docs/CHANGELOG.md) for sprint history.

## Local development

```bash
npm install
cp .env.example .env   # then fill in the real Supabase values
npm run dev
```

## Scripts

| Command             | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start the Vite dev server             |
| `npm run build`     | Typecheck and build for production    |
| `npm run lint`      | Run ESLint                            |
| `npm run typecheck` | Run the TypeScript compiler (no emit) |
| `npm run test`      | Run unit tests with Vitest            |
| `npm run preview`   | Preview the production build locally  |

## Database migrations

Migrations live in `supabase/migrations/`. Create a new one with:

```bash
npx supabase migration new <name>
```

Merging to `main` runs `supabase db push` and deploys to Cloudflare Pages automatically via GitHub Actions.

## CI/CD

- **CI** (`.github/workflows/ci.yml`): lint, typecheck, test, and build on every PR to `main` or `develop`.
- **Deploy** (`.github/workflows/deploy-production.yml`): on push to `main`, applies Supabase migrations then deploys `dist/` to Cloudflare Pages.
- **Keep-alive** (`.github/workflows/keep-alive.yml`): daily ping so the free-tier Supabase project doesn't pause.
