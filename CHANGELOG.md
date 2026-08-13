# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `@tanstack/react-query` and `@tanstack/react-query-devtools`, wired up via
  `src/components/providers/query-provider.tsx` (SSR-safe per-request
  `QueryClient`, devtools mounted only in development) and mounted in
  `src/app/layout.tsx`.
- shadcn/ui (`base-nova` style, Tailwind v4, `@base-ui/react` primitives) via
  `pnpm dlx shadcn@latest init`, adding `components.json`,
  `src/lib/utils.ts`, and `src/components/ui/button.tsx`.
- Brand design tokens in `src/app/globals.css`: `--brand-green` (#2f9e44),
  `--brand-yellow` (#f2d024), `--brand-teal` (#0f3a44), `--brand-teal-deep`
  (#10262e), `--brand-cream` (#f5f4ea), `--brand-cream-border` (#ecebdd),
  exposed as Tailwind utilities (`bg-brand-green`, `text-brand-yellow`, etc.)
  and mapped onto shadcn's semantic tokens (`--background`, `--primary`,
  `--accent`, `--border`, `--ring`) to match the EKO170 design reference in
  `docs/resources/`.
- Barlow Condensed, DM Sans, and DM Mono via `next/font/google` in
  `src/app/layout.tsx`, replacing the default Geist fonts; wired to
  `--font-heading`, `--font-sans`, and `--font-mono` respectively.
- Site-wide shared shell: `src/features/base/components/site-header.tsx`
  (topbar + navbar + spacer), `site-footer.tsx`, and `scroll-to-top.tsx`,
  mounted in a new `src/app/(base)/layout.tsx` route group wrapping the
  home page (`src/app/(base)/page.tsx`, moved from `src/app/page.tsx`).
  Root `src/app/layout.tsx` stays limited to html/body/fonts/QueryProvider.
- `features/base/navigation/`: `PRIMARY_NAV`, `FOOTER_NAV`, and
  `REGISTER_HREF` as plain constants (internal routing, not admin content)
  consumed by `nav-bar.tsx` (hide-on-scroll, active-route highlighting,
  dropdown, magnetic Register CTA) and `mobile-nav.tsx` (shadcn `Sheet`,
  since the source design has no responsive breakpoints at all).
- `features/base/event/`: admin-editable event data (event date, ticker
  facts, contact/socials) on the full RCC pipeline — `stubs.ts` →
  `server/service.ts` (server-only) → `app/api/v1/event/route.ts` →
  `dal.ts` (axios, not server-only) → `hooks/use-event.ts`
  (`useGetEventDetails`, query key in `constants.ts`). Powers
  `top-bar.tsx`, `ticker.tsx` (CSS marquee, `--animate-marquee` in
  `globals.css`), and the footer's contact/social row.
- `features/base/event/hooks/use-countdown.ts` + `components/countdown.tsx`:
  live countdown to the event's DB-configurable date, ticking client-side
  via a render-derived value (not synced into state) to avoid cascading
  setState-in-effect renders.
- `src/hooks/use-magnetic-hover.ts`: generic magnetic-hover motion values,
  used by the Register CTA.
- `src/lib/constants.ts` (`API_V1_BASE_PATH`) and `src/lib/http-client.ts`
  (browser-only axios instance) — framework infra, not feature-specific.
- `motion`, `axios`, `@tabler/icons-react` (brand/social icons —
  `lucide-react` v1 no longer ships them), `server-only`, and the shadcn
  `Sheet` component.

### Changed
- `next.config.ts` now sets `output: "standalone"` so the app can be
  deployed as a minimal Docker/VPS build in addition to Vercel.
- `eslint.config.mjs` excludes `docs/**` (vendored design-export HTML/JS,
  already gitignored) from linting.
- `src/app/layout.tsx` metadata title/description updated from the
  create-next-app defaults to EKO170's actual name and description.

### Fixed
- `src/app/globals.css` had a circular `--font-sans: var(--font-sans)`
  left over from the shadcn init script; pointed it at the correct font
  variable.
