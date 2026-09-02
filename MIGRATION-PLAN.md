# Migration Plan: Vite SPA + Express to Next.js 16 App Router

## Roadmap & Phases

### Fase 0 — Handover Infrastructure
- [x] Initial documentation (PROJECT.md, ARCHITECTURE.md, MIGRATION-PLAN.md, CURRENT-STATUS.md, DECISIONS.md, CLAUDE-RULES.md)
- [x] Git initialization, `.gitignore` setup, baseline commit

### Fase 1 — Fondasi (Foundation)
- [x] Scaffold Next.js 16 directory layout (`src/app/`, `src/features/`, `src/components/`, `src/lib/`, `src/config/`, `src/observability/`)
- [x] Environment validation with `@t3-oss/env-nextjs` and Zod (`src/config/env.ts`)
- [x] Server-side Firebase Admin singleton (`src/lib/firebase/admin.ts`) and Client SDK (`src/lib/firebase/client.ts`)
- [x] Unified Firestore entry point (`src/lib/db.ts`)
- [x] Shadcn/UI configuration (`components.json`) + foundational components (`Button`, `Input`, `Dialog`, `Sheet`, `Table`, `Card`, `Badge`, `Skeleton`)
- [x] Helper utilities (`src/lib/utils.ts`)
- [x] Move & adapt `src/observability/**`
- [x] Tooling setup: `vitest.config.ts`, `.github/workflows/ci.yml`, `.husky/`, `commitlint.config.js`
- [x] Base `middleware.ts` skeleton

### Fase 2 — Articles (Pilot Domain)
- [ ] Port `IArticleRepository` & `firestoreArticleRepository` to `features/articles/data/`
- [ ] Zod schema: `features/articles/schemas/article.schema.ts`
- [ ] Server Actions: `features/articles/actions/` (create, update, delete, publish, toggle status)
- [ ] Public Route: `app/(portal)/berita/[slug]/page.tsx` with dynamic `generateMetadata()`
- [ ] Public Route: `app/(portal)/page.tsx` for Homepage article sections
- [ ] Admin Route: `app/(dashboard)/batutv-control/articles/` (Article List, Filter, Editor form)
- [ ] Dynamic Sitemap section: `app/sitemap.ts`
- [ ] Tests: Unit test repository & e2e flow

### Fase 3 — Authentication & RBAC
- [ ] Port auth logic to httpOnly session cookie with Firebase Admin verification
- [ ] Route Handler: `app/api/auth/session/route.ts` & `app/api/auth/logout/route.ts`
- [ ] Middleware route guard in `middleware.ts` for `/batutv-control/*`
- [ ] Login page: `app/(auth)/login/page.tsx`
- [ ] Auth session hooks & provider

### Fase 4 — Videos & Media Library
- [ ] Port `IVideoRepository` & `IMediaRepository` to `features/videos/` and `features/media/`
- [ ] Video schemas, server actions, YouTube parser & thumbnail utilities
- [ ] Public Video page & player modal: `app/(portal)/video/`
- [ ] Admin Video & Media management: `app/(dashboard)/batutv-control/videos/` and `media/`

### Fase 5 — Taxonomy (Categories & Tags)
- [ ] Port `ICategoryRepository` & `ITagRepository`
- [ ] Schemas and server actions
- [ ] Public category/tag archive pages: `app/(portal)/kategori/[slug]/` & `app/(portal)/tag/[slug]/`
- [ ] Admin category/tag management

### Fase 6 — Pages, Navigation, Site Settings, Users
- [ ] Port `IPageRepository`, `INavigationRepository`, `ISiteSettingsRepository`, `IFooterRepository`, `IUserRepository`
- [ ] Dynamic static pages routing: `app/(portal)/[slug]/page.tsx`
- [ ] Admin management views
- [ ] System settings & live Firestore syncing tools

### Fase 7 — Cutover, Cleanup & Final Audit
- [ ] Run all 23 audit scripts (`npm run audit:all`)
- [ ] Deprecate `App.tsx` and legacy `server.ts`
- [ ] Final E2E testing and production verification
