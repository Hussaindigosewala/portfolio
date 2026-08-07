# Hussain — Portfolio

Premium single-page portfolio. Built with Next.js 16 (App Router), React 19,
TypeScript (strict), Tailwind CSS v4, GSAP (+ ScrollTrigger, SplitText), and
Lenis smooth scroll. Deploys as a static export to Cloudflare Pages.

## Status

**Phase 1 — scaffolding (current).** Project setup, design tokens, fonts,
section shells, nav/footer, and Lenis smooth scroll. No section content,
animations, or character rig yet.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build + static export to ./out
npm run typecheck  # tsc --noEmit
```

## Design tokens (Violet Hour)

Defined once in `app/globals.css` via the Tailwind v4 `@theme` block, exposed
both as CSS variables and utilities:

| Token          | Value                     | Purpose                 |
| -------------- | ------------------------- | ----------------------- |
| `bg`           | `#0A0714`                 | page background         |
| `surface`      | `#141021`                 | cards / panels          |
| `line`         | `rgba(157,107,255,.16)`   | borders                 |
| `text`         | `#F2EFFA`                 | primary text            |
| `muted`        | `#9C93B8`                 | secondary text          |
| `accent`       | `#9D6BFF`                 | buttons / links / CTAs  |
| `accent-soft`  | `#C9B8FF`                 | highlights / labels     |

Use as `var(--bg)` / `var(--color-bg)` or as utilities `bg-bg`, `text-muted`,
`border-line`, `font-display`, `font-body`, etc.

## Structure

```
app/            layout, page (section composition), globals.css
components/
  sections/     Hero, About, Clients, Software, PortfolioHighlights, Contact
  layout/       Nav, Footer
lib/            SmoothScroll (Lenis); GSAP/ScrollTrigger utilities in Phase 2
public/assets/  character/, portfolio/, clients/
```

## Environment

No secrets required for Phase 1. Copy `.env.local.example` to `.env.local`
for later phases. `.env.local` is gitignored.
