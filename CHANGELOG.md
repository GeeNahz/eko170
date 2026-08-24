# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Dedicated mobile layout for the Home page (`src/app/(base)/page.tsx`),
  built to match the mobile design mockup (`docs/EKO170 Mobile
  (standalone).html`) rather than just reflowing the desktop grid. The
  page now renders two section trees gated by `lg:` — `hidden lg:contents`
  for the existing desktop order/components, `contents lg:hidden` for a
  new `HomeMobileSections` composition
  (`features/base/home/components/home-mobile-sections.tsx`) — since the
  mockup's section order differs from desktop's (registration banner and
  countdown move up, seeding events/figures move down, sponsors/moments
  swap) and can't be reached with breakpoint classes alone. Four sections
  needed genuinely different mobile markup, so they get dedicated
  components read by the mobile tree only: `EventBarMobile` (compact
  ride cards with a big distance number, shared side-by-side "Enter the
  Full/Half Ride" buttons and a single "Results" link, replacing the
  desktop 4-cell-per-card stack), `SeedingEventsMobile` (horizontal-scroll
  carousel of compact cards instead of a `min-h-[280px]` vertical stack),
  `AtlanticChallengeMobile` (reorders to paragraph → map → stats →
  highlights → buttons, which the desktop 2-column split can't express),
  and `MomentsInMotionMobile` (reorders to paragraph → video → buttons,
  and turns the photo strip into a horizontal-scroll carousel). Everything
  else got smaller in-place responsive fixes instead of a new component:
  `CountdownSection`'s four tiles now shrink to fit one row below `sm:`
  instead of wrapping to 2×2; `AboutEko`'s traffic-closure callout had a
  `min-w-70` that clipped its paragraph at mobile widths, now relaxed
  below `sm:`; `ChooseDistance` and `SponsorsMarquee` both had their
  eyebrow label + CTA button drop to separate lines on mobile, now paired
  on one row with the heading below; `FeatureCommunity`'s image/text order
  no longer flips only below `lg:` (image is first at every width, not
  just desktop); `FeatureRoute` swaps its photo+badge for a plain inline
  "2,000+ Expected Riders" stat below `lg:`, matching the mockup instead
  of keeping the desktop image; `Newsletter`'s `Subscribe` button now
  matches the email input's width below `sm:` instead of shrinking to
  content width.
- Register page (`src/app/(base)/(content)/register/page.tsx`), the
  last page in the build order — every "Register Now" CTA site-wide now
  resolves to a real page. Built under `features/base/register/`:
  `RegisterHero`, `RegistrationForm` (17-field form across Personal
  Information, Cycling Affiliation, Identification, Medical Insurance,
  and Emergency Contact sections), `RegistrationSuccess`. This is the
  project's first real mutation — every other page has been read-only —
  and the first use of the "Next.js fullstack" primary form path from
  the global spec: form (`useForm` from `react-hook-form`, newly
  installed) → `useActionState` → Server Action (`register/server/
  actions.ts`) → `RegisterService.submitRegistration` (`register/
  server/service.ts`, stub-shaped, generates an `EKO170-XXXXXX` ref
  code) → action → form. React Hook Form owns client-side field
  registration/validation (required fields, email pattern) with inline
  error display; `handleSubmit` calls the `useActionState` dispatch
  function directly with the validated values object once client rules
  pass, and the Server Action re-validates the same rules server-side
  as defense in depth, echoing back submitted values on error so the
  form can restore them. Introduces the project-wide `ActionResponse<T>`
  discriminated-union type (`src/lib/types.ts`) for any future Server
  Action to reuse. Submission status is surfaced via shadcn's `sonner`
  toast component (newly installed, along with `input` and `label`),
  mounted once as a global `<Toaster />` in the root layout — success
  shows the generated reference code, server-side validation failure
  shows an error toast alongside RHF's inline field errors.
- Discover page (`src/app/(base)/(content)/discover/page.tsx`), built
  from `docs/resources/Discover.dc.html` under
  `features/base/discover/`: `DiscoverHero`, `CityIntro`,
  `AttractionsSection` (`id="attractions"`, image grid with category
  badges), `HotelsSection` (`id="hotels"`), `RestaurantsSection`
  (`id="restaurants"`), `TransportSection` (`id="transport"`),
  `RaceWeekendTimeline` (Fri/Sat/Sun vertical timeline), `DiscoverCta`.
  Reuses one `DiscoverCard` type across the Hotels/Restaurants/Transport
  grids, same precedent as `CommunityCard`.
- Results page (`src/app/(base)/(content)/results/page.tsx`), built from
  `docs/resources/Results.dc.html` under `features/base/results/`:
  `ResultsHero`, `ResultCategories` (Full Ride/Half Ride cards),
  `ResultsCta`, `RegisterCta`. Deliberately does not reproduce the
  source's hardcoded 95-row results table or numeric stats — that data
  turned out to be real 2026 EKO170 results copied into the static
  design mockup, not placeholder content, and reproducing it here would
  misrepresent it as live data we're not actually pulling. finishtime.co
  .za has no public API and no iframe embedding (`x-frame-options:
  SAMEORIGIN` on their results pages, which also sit behind a Cloudflare
  bot challenge for automated requests — confirmed via `curl`/WebFetch,
  matching how the real eko170.com production site does it: a plain
  "View Official Results" link that opens `results.finishtime.co.za`
  directly in a new tab). `ResultsInfo.resultsUrl` (the one genuinely
  admin-editable value on this page — swapped to the 2027 event's URL
  once it's timed) goes through the full RCC pipeline (`stubs.ts` →
  `server/service.ts` → `app/api/v1/results/route.ts` → `dal.ts` →
  `hooks/use-results.ts`), mirroring `features/base/event/` exactly.
- Community page (`src/app/(base)/(content)/community/page.tsx`), built
  from `docs/resources/Community.dc.html` under
  `features/base/community/`: `CommunityHero`, `CommunityStats` (4-stat
  bar), `VolunteersSection` (`id="volunteers"`), `CyclingClubs` (`id=
  "clubs"`), `CharityCauses` (`id="charity"`), `SustainabilitySection`
  (`id="sustainability"`), `LegacySection` (`id="legacy"`, text-left/
  image-right — the opposite column order from About's `Legacy`, per
  source), `CommunityCta`. Both CTAs link `REGISTER_HREF`. Reuses one
  `CommunityCard` type across the three 3-card grid sections (Clubs,
  Charity, Sustainability), same shape as `WhyPartnerCard`.
- Partners page (`src/app/(base)/(content)/partners/page.tsx`), built
  from `docs/resources/Partners.dc.html` under `features/base/partners/`:
  `PartnersHero`, `PartnersStats` (4-stat bar), `HeadlinePartners`
  (Title/Presenting Partner cards), `PartnersSponsors` (5-logo commercial
  grid, `id="sponsors"`), `PartnersGovernment` (4-logo grid, `id=
  "government"`), `PartnersWhy` ("Why Partner With Us" 3-card grid),
  `PartnersCta` (`mailto:partners@eko170.com` — the first page whose CTA
  is an email link rather than `/register`). Defines its own Commercial/
  Government logo split (`COMMERCIAL_PARTNER_LOGOS`/`GOVERNMENT_PARTNER_
  LOGOS`) rather than reusing Home's `SPONSOR_LOGOS`/`PARTNER_LOGOS`,
  since those are just a mixed decorative marquee order that doesn't match
  this page's real categorization (e.g. Dynastar is commercial here, not
  government). Reuses the `SponsorLogo` type from `features/base/lib/
  types.ts`.
- Gallery page (`src/app/(base)/(content)/gallery/page.tsx`), built from
  `docs/resources/Gallery.dc.html` under `features/base/gallery/`:
  `GalleryHero`, `GalleryGrid` (4 photo categories — Start Line, On the
  Road, Finish & Podium, Race Village — 46 photos total, hover zoom,
  click-to-open), `Lightbox` (full-screen overlay via `motion/react`'s
  `AnimatePresence`, closes on Escape or click-outside), `GalleryCta`.
  Reuses the existing `GalleryPhoto` type from `features/base/lib/types.ts`.
  Corrected `GALLERY_TOTAL_PHOTOS` in `home/constants.ts` from 18 to 46 to
  match the real page.
- Routes pages: overview at `/routes` and shared distance-detail template
  at `/routes/170` and `/routes/70`, built from `docs/resources/Route.dc
  .html`, `Route170.dc.html`, and `Route70.dc.html` under
  `features/base/routes/`. Overview: `RoutesHero`, `CourseOverview`,
  `RouteCategories`, `RouteSupport`, `RouteMap` (real OpenStreetMap embed,
  `id="map"`). Distance pages share one `RouteDetail` template
  parameterized by a `RouteDetailData` object (`ROUTE_170_DETAIL`/
  `ROUTE_70_DETAIL` in `routes/constants.ts`) — hero, sticky sub-nav with
  scroll-spy active-section highlighting (`RouteSubNav`, `use-scroll-spy
  .ts`), race entries/pricing, introduction, route description, start,
  finish, "more about" cards, and an FAQ accordion (shadcn `Accordion`,
  newly installed). `ROUTE_STATS`/`ROUTE_HIGHLIGHTS` moved from
  `features/base/home/constants.ts` into `routes/constants.ts` since both
  Home's `AtlanticChallenge` teaser and the Routes overview need the same
  course data. All CTAs across these pages point at `/register` (not yet
  built) rather than the source's in-page anchor, since Register hasn't
  been reached in the build order yet.
- New `(base)/(content)/` route group with its own `layout.tsx` that
  renders the marquee `Ticker` once, ahead of `{children}`, for every
  "content" page (About, Routes, and future pages) — matching how the
  source design places the ticker above each such page's hero. Home stays
  outside this group since its hero renders before the ticker, not after.
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
- Home page (`src/app/(base)/page.tsx`), built from `docs/resources/Eko170
  Hero.dc.html` under `features/base/home/components/`: `Hero` (video
  Ken Burns background, scoped `SplashLoader` with real asset-preload
  progress, magnetic Register CTA), `EventBar`, `DistanceBar`,
  `CountdownSection`, `SeedingEvents`, `RegistrationBanner`, `Figures`
  (scroll-triggered count-up via `src/hooks/use-count-up.ts`),
  `AboutEko`, `ChooseDistance`, `AtlanticChallenge` (route map is a
  placeholder — no real map integration yet), `FeatureRoute`/
  `FeatureCommunity`, `SponsorsMarquee`, `MomentsInMotion` (gallery
  teaser), and `Newsletter` (presentational only — no subscriber backend
  yet). Cross-page content (sponsor/partner logos, seeding events,
  gallery photos) is hardcoded in `features/base/home/constants.ts` for
  now; it'll move into its own feature (stub/service/dal) when the
  Partners/Gallery pages are built.
- `src/components/motion/reveal.tsx`: `Reveal`/`RevealGroup`/`RevealItem`
  scroll-reveal wrappers around Framer Motion's `whileInView`, replacing
  the source's custom `IntersectionObserver` reveal system.
- Shared content types (`RouteStat`, `FigureStat`, `SponsorLogo`,
  `GalleryPhoto`) elevated to `features/base/lib/types.ts` since future
  Partners/Gallery/Results features will reuse them, rather than living
  in `features/base/home/types.ts`.
- Copied `hero-bg.mp4`, 10 event photos, and 14 sponsor/partner logos
  into `public/` (source references `logo-*.png`; actual shipped files
  are `logo-*-sm.jpg`, mapped accordingly).
- About page (`src/app/(base)/about/page.tsx`), built from
  `docs/resources/About.dc.html` under `features/base/about/components/`:
  `AboutHero` (full-bleed image hero with stat bar), `PullQuote`,
  `VisionMission` (two-column Vision/Mission on a dark teal panel),
  `FourCs` (Challenge/Culture/Community/Change card grid), `Legacy`
  (image + "Ride to School" badge + bullet list), and `CtaBanner`. All
  copy is fixed marketing content in `features/base/about/constants.ts` —
  no admin/DB backing needed for this page.

### Changed
- `next.config.ts` now sets `output: "standalone"` so the app can be
  deployed as a minimal Docker/VPS build in addition to Vercel.
- `eslint.config.mjs` excludes `docs/**` (vendored design-export HTML/JS,
  already gitignored) from linting.
- `src/app/layout.tsx` metadata title/description updated from the
  create-next-app defaults to EKO170's actual name and description.
- `src/app/layout.tsx` root `<html>` now has `scroll-smooth`, matching the
  source design's global smooth-scroll behavior — needed for the Routes
  sub-nav's anchor jumps and any other in-page `#anchor` link.

### Fixed
- Home page's mobile layout (added above) still didn't visually match the
  mobile mockup: the Hero used the same near-full-viewport-height,
  vertically-centered box as desktop (`h-[calc(100vh-32px)]
  min-h-[760px]` with `items-center`), leaving a large empty gap before
  any text appeared on a phone screen, and every section kept desktop's
  floating rounded-card treatment (`mx-4 rounded-[22px]`) instead of the
  mockup's edge-to-edge mobile sections. Root-caused this time by loading
  the mockup in a real browser and reading its actual rendered DOM
  (`getComputedStyle` on each top-level section — background color,
  padding, border-radius, x-position) rather than eyeballing screenshots,
  then diffing the same extraction against the live site. Added
  `HeroMobile` (`features/base/home/components/hero-mobile.tsx`) with
  content starting right below the nav instead of vertically centered.
  Confirmed the mockup treats `EventBar`+`DistanceBar`+
  `RegistrationBanner`+`CountdownSection` as one continuous edge-to-edge
  block (not four separate cards) — merged into a new `EventGroupMobile`
  (`event-group-mobile.tsx`), replacing the now-deleted
  `event-bar-mobile.tsx`. Stripped the `mx-4`/`rounded-[22px]` card
  treatment to edge-to-edge (`sm:` still restores it for desktop) from
  every other Home section, `Ticker`, and `SiteFooter`. Also corrected
  two real background-color mismatches the DOM diff caught: `Figures`
  and `SiteFooter` use a darker `#0b1f25` on mobile, not `brand-teal`;
  `FeatureRoute` (`feature-rows.tsx`) uses a dark `brand-teal` background
  with white/yellow text on mobile, not the white background it and
  desktop share — plus `ChooseDistance`'s mobile background is
  `brand-cream`, not white.
- Mobile responsiveness pass across the site, guided by a mobile design
  mockup (`docs/EKO170 Mobile (standalone).html`) covering every built
  page. `MobileNav` (`features/base/navigation/components/
  mobile-nav.tsx`) rebuilt to match: full-bleed dark `Sheet` panel
  (`bg-brand-teal-deep`) instead of the previous light theme, with the
  "Routes" entry now a collapsed shadcn `Accordion` instead of
  always-expanded children — surfaced and fixed a latent Base UI warning
  in the process (`SheetClose` rendering a `<Link>` needs
  `nativeButton={false}`, since it defaults to expecting a real
  `<button>`). `SiteFooter`'s link-group grid
  (`features/base/components/site-footer.tsx`) collapsed to a single
  column below the `sm:` breakpoint, stacking the brand block on top of
  "The Event"/"Discover" instead of keeping those two side-by-side;
  restructured so the brand block stacks alone on mobile while the two
  `FOOTER_NAV` groups stay in an unconditional 2-column row (`sm:contents`
  releases them into the existing 3-column desktop grid at `sm:` and up).
  Two spacing polish fixes: `RouteSubNav`'s sticky pill nav
  (`features/base/routes/components/route-sub-nav.tsx`) had an
  unconditional `mx-10` cramping the horizontal-scroll row on narrow
  phones (`mx-4 sm:mx-10`); `RegistrationForm`'s form card
  (`features/base/register/components/registration-form.tsx`) had an
  unconditional `p-10` (`p-6 sm:p-10`).
- `GalleryGrid`'s photo grid rendered as a ~60px-wide sliver instead of
  full width. `body` is `flex flex-col`; a section root using
  `mx-auto max-w-[...]` (rather than a full-width `mx-4` wrapper) becomes
  a direct flex child of it, and per the flexbox spec auto cross-axis
  margins suppress stretch, sizing the box to its own max-content width
  instead. Text-heavy sections still landed near their max-width by
  coincidence (wide intrinsic content), but `GalleryGrid`'s cells are
  `next/image fill` (`position: absolute`, no intrinsic width), leaving
  nothing to size against. Added `w-full` alongside `mx-auto max-w-[...]`
  on `GalleryGrid`, and preemptively on `CourseOverview`, `RouteSupport`,
  and `GalleryHero`, which had the same latent risk.
- `src/app/globals.css` had a circular `--font-sans: var(--font-sans)`
  left over from the shadcn init script; pointed it at the correct font
  variable.
- `output: "standalone"` in `next.config.ts` broke Vercel deploys
  (`ENOENT: .next/next-server.js.nft.json` during `pnpm run build`) —
  standalone mode changes how Next writes its build-trace files, which
  Vercel's own build wrapper doesn't expect. Now gated on `process.env
  .VERCEL` so standalone output only applies to local/VPS builds; Vercel
  builds get its native output.
- `useCountdown` (`src/features/base/event/hooks/use-countdown.ts`) froze
  after the first render instead of ticking every second. It derived the
  displayed value from `Date.now()` directly during render, using only a
  tick counter to force re-renders — since that counter wasn't read by the
  returned expression, the React Compiler's auto-memoization (enabled via
  `reactCompiler: true`) cached the result keyed on the unchanging
  `targetISO` argument alone and never recomputed it. Now the interval
  callback computes the value and stores it directly in state, so the
  displayed countdown is itself the reactive value.
