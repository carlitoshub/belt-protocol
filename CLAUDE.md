# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Starts dev server at http://127.0.0.1:3000 (hostname required for Keystatic OAuth)

# Build & Production
npm run build
npm run start
```

There are no lint or test scripts configured.

## Architecture Overview

**Belt Protocol** is a multilingual marketing website built with Next.js 16 App Router, with content managed through Keystatic CMS backed by GitHub storage.

### Routing

```
/                          → redirects to /en
/[locale]/                 → home page (locale: en | ro | it)
/keystatic/                → CMS admin UI (GitHub App auth required)
/api/keystatic/[...params] → CMS API handler
```

### i18n (next-intl)

Locales are defined in `src/i18n/routing.ts` (`en`, `ro`, `it`). The middleware in `src/proxy.ts` handles locale detection and injection.

**Important:** The file is `src/proxy.ts`, NOT `src/middleware.ts` — this is the Next.js 16 convention for the middleware file name.

The middleware matcher excludes `api`, `_next`, `_vercel`, `keystatic`, and paths with file extensions from locale handling.

**English** content is loaded from individual Keystatic singleton JSON files in `messages/en/*.json`. A legacy flat file `messages/en.json` also exists but is not used by the app — the split files in `messages/en/` are the active source of truth.

**Non-English locales** (`ro`, `it`) use flat files (`messages/ro.json`, `messages/it.json`) that are edited manually — they are not managed through Keystatic.

In components, use `useTranslations('sectionName')` and `t.raw('key')` for arrays.

### Content Management (Keystatic)

Keystatic manages English content as singletons stored in `messages/en/`:
`nav`, `hero`, `about`, `faq`, `principles`, `blog`, `cta`, `footer`

The schema is defined in `keystatic.config.ts`. Changes made in the CMS are committed to the GitHub repo (`carlitoshub/belt-protocol`).

**Auth requirement:** Keystatic requires a **GitHub App** (not a GitHub OAuth App). OAuth Apps don't return `refresh_token`/`expires_in`, causing 401 errors. Credentials live in `.env.local`.

### Tailwind CSS v4

Theme tokens (colors, etc.) are defined via `@theme {}` in `src/app/globals.css`, not in a `tailwind.config.js`. Custom utilities (`glass`, `gradient-text`, `glow-orange`, `animate-marquee`) are also defined there.

### Component Patterns

All components are `'use client'` and live in `src/components/`. They use:
- `useTranslations('section')` from next-intl for copy
- `useLocale()` / `useRouter()` / `usePathname()` for navigation
- Framer Motion for animations
- `@/` path alias for imports from `src/`

`SetLang` is a client component that sets the `lang` attribute on `<html>` to match the active locale.

`Features.tsx` exists in `src/components/` but is not currently rendered on the page and has no corresponding Keystatic singleton schema — it is work-in-progress.

### Layout Hierarchy

```
app/layout.tsx (html + body)
└── app/[locale]/layout.tsx (NextIntlClientProvider + SetLang)
    └── app/[locale]/page.tsx (composes Nav, Hero, About, FAQ, Principles, BlogSection, CTA, Footer)
```

### Dev Server Note

The dev server must run on `127.0.0.1` (via `--hostname 127.0.0.1` in the dev script) to match the Keystatic GitHub App OAuth callback URL. Network access from other IPs is allowed via `allowedDevOrigins: ['192.168.1.19']` in `next.config.ts`.
