# BatuTV News Portal - Project Overview

## 1. Identitas Project
- **Nama**: BatuTV News Portal & BatuTV Control
- **Fokus**: Portal Berita & Televisi Digital Kota Batu, Malang Raya, dan Jawa Timur
- **Stack Target**: Next.js 16 (App Router), TypeScript Strict, Tailwind CSS, Shadcn UI, Zustand, React Hook Form + Zod, `@t3-oss/env-nextjs`, Vitest + Playwright, Firebase Firestore & Firebase Auth (Server-side Admin + Client SDK).

## 2. Fitur Utama
- **Portal Publik**:
  - Homepage: Headline grid, latest news, trending ticker, regional spotlight, editor's choice, video spotlight, livestream player modal.
  - Berita: Detail artikel (`/berita/[slug]`), rich typography, social share, related news, dynamic SEO OpenGraph metadata.
  - Kategori, Tags, dan Author Archive.
  - Video & Streaming: Video catalog, YouTube embed player modal, live broadcast banner.
  - Interactive: Search modal, bookmark system, mobile drawer menu, reading mode / dark-light mode.
- **Admin CMS Panel (`/batutv-control`)**:
  - Articles Management: CRUD, filter, search, draft/publish workflow, headline/editor's choice toggle, AI-assisted tagging & SEO tools.
  - Video Management: CRUD video YouTube, thumbnail generator, live status toggle.
  - Taxonomy: Categories & Tags CRUD with slug generator.
  - Page & Navigation Management: Custom static pages, hierarchical header & footer menu builder.
  - Media Library: Upload, asset picker, search, format filter.
  - User & Access Control (RBAC): Superadmin, Editor, Journalist, Contributor.
  - Site Settings & System Settings: Profile, logos, social links, SEO defaults, Firestore live sync & cache management, audit log viewer.
- **Infrastruktur & Observability**:
  - Dynamic `sitemap.xml` & `robots.txt` generator.
  - Health checks (`/api/health`, `/live`, `/ready`).
  - Webhook ingestion endpoint.
  - 23 script audit operasional (Security, SLO, Disaster Recovery, Backup Verification, Cost & Capacity, Drift Detection).
