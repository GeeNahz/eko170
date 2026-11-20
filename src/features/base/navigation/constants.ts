import { ROUTE_70_DETAIL, ROUTE_170_DETAIL } from "../routes/constants";
import type { FooterLinkGroup, NavLink } from "./types";

// Five-tab structure per the client's 28 Oct 2026 review doc: Home |
// Event | Accommodation | Shop | Partners. "Event" folds Overview,
// both route pages, Results, Gallery and a Volunteer invitation into
// one dropdown (reusing the same children mechanism the old "Routes"
// dropdown used) rather than moving any of those pages' URLs — the
// doc explicitly says Results/Gallery keep their direct URLs. Entries
// below that no longer have a top-level slot are kept `hidden: true`
// rather than deleted, matching this file's existing convention.
export const PRIMARY_NAV: NavLink[] = [
  { id: "nav-home", label: "Home", href: "/" },
  {
    id: "nav-event",
    label: "Event",
    // No href — this item is a dropdown trigger only, not a link.
    children: [
      { id: "nav-event-overview", label: "Overview", href: "/about" },
      // Labels read off each route's own navLabel so this can't drift
      // out of sync again (previously a hardcoded "EKO 70" string).
      {
        id: "nav-event-routes-170",
        label: ROUTE_170_DETAIL.navLabel,
        href: "/routes/170",
      },
      {
        id: "nav-event-routes-70",
        label: ROUTE_70_DETAIL.navLabel,
        href: "/routes/70",
      },
      { id: "nav-event-results", label: "Results", href: "/results" },
      { id: "nav-event-gallery", label: "Gallery", href: "/gallery" },
      { id: "nav-event-volunteer", label: "Volunteer", href: "/volunteer" },
    ],
  },
  {
    id: "nav-accommodation",
    label: "Accommodation",
    // Grayed out per the doc ("Grayed out for now") — no content yet,
    // hardcoded disabled rather than tied to any state, since it's a
    // content-readiness gate, not a registration-state one.
    disabled: true,
  },
  { id: "nav-shop", label: "Shop", href: "/shop" },
  { id: "nav-partners", label: "Partners", href: "/partners" },
  { id: "nav-about", label: "About Us", href: "/about", hidden: true },
  { id: "nav-results", label: "Results", href: "/results", hidden: true },
  { id: "nav-gallery", label: "Gallery", href: "/gallery", hidden: true },
  { id: "nav-discover", label: "Discover", href: "/discover", hidden: true },
  {
    id: "nav-community",
    label: "Community",
    href: "/community",
    hidden: true,
  },
  {
    id: "nav-volunteer",
    label: "Volunteer",
    href: "/volunteer",
    hidden: true,
  },
  {
    id: "nav-partner-apply",
    label: "Become a Partner",
    href: "/partners/apply",
    hidden: true,
  },
];

export const FOOTER_NAV: FooterLinkGroup[] = [
  {
    id: "footer-event",
    title: "The Event",
    links: [
      { id: "footer-event-home", label: "Home", href: "/" },
      { id: "footer-event-race", label: "The Race", href: "/routes/170" },
      { id: "footer-event-route", label: "Route", href: "/routes/170" },
      {
        id: "footer-event-riders",
        label: "Rider Information",
        href: "/routes/170",
      },
      { id: "footer-event-spectators", label: "Spectators", href: "/discover" },
      { id: "footer-event-volunteer", label: "Volunteer", href: "/volunteer" },
      { id: "footer-event-community", label: "Community", href: "/community" },
    ],
  },
  {
    id: "footer-discover",
    title: "Discover",
    links: [
      { id: "footer-discover-news", label: "News", href: "/gallery" },
      {
        id: "footer-discover-sponsors",
        label: "Sponsors",
        href: "/partners",
        hidden: true,
      },
      { id: "footer-discover-about", label: "About EKO170", href: "/about" },
      { id: "footer-discover-gallery", label: "Gallery", href: "/gallery" },
    ],
  },
  {
    id: "footer-legal",
    title: "Legal",
    links: [
      // "Contact" has no static href — site-footer.tsx renders it as a
      // mailto: link using event.contactEmail instead of a page.
      { id: "footer-legal-contact", label: "Contact" },
      { id: "footer-legal-privacy", label: "Privacy", href: "/privacy" },
      { id: "footer-legal-terms", label: "Terms", href: "/terms" },
    ],
  },
];
