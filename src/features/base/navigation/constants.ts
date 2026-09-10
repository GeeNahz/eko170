import type { FooterLinkGroup, NavLink } from "./types";

export const PRIMARY_NAV: NavLink[] = [
  { id: "nav-home", label: "Home", href: "/" },
  { id: "nav-about", label: "About Us", href: "/about" },
  {
    id: "nav-routes",
    label: "Routes",
    href: "/routes",
    children: [
      { id: "nav-routes-170", label: "EKO 170", href: "/routes/170" },
      { id: "nav-routes-70", label: "EKO 70", href: "/routes/70" },
      { id: "nav-routes-map", label: "Interactive Map", href: "/routes#map" },
      { id: "nav-routes-seeding", label: "Seeding Events", href: "/#seeding" },
    ],
  },
  { id: "nav-results", label: "Results", href: "/results" },
  { id: "nav-gallery", label: "Gallery", href: "/gallery" },
  { id: "nav-partners", label: "Sponsors & Partners", href: "/partners" },
  { id: "nav-discover", label: "Discover", href: "/discover" },
  { id: "nav-community", label: "Community", href: "/community" },
  { id: "nav-volunteer", label: "Volunteer", href: "/volunteer" },
  { id: "nav-partner-apply", label: "Become a Partner", href: "/partners/apply" },
];

export const FOOTER_NAV: FooterLinkGroup[] = [
  {
    id: "footer-event",
    title: "The Event",
    links: [
      { id: "footer-event-home", label: "Home", href: "/" },
      { id: "footer-event-race", label: "The Race", href: "/routes" },
      { id: "footer-event-route", label: "Route", href: "/routes" },
      { id: "footer-event-riders", label: "Rider Information", href: "/routes" },
      { id: "footer-event-spectators", label: "Spectators", href: "/discover" },
    ],
  },
  {
    id: "footer-discover",
    title: "Discover",
    links: [
      { id: "footer-discover-news", label: "News", href: "/gallery" },
      { id: "footer-discover-sponsors", label: "Sponsors", href: "/partners" },
      { id: "footer-discover-about", label: "About EKO170", href: "/about" },
      { id: "footer-discover-gallery", label: "Gallery", href: "/gallery" },
    ],
  },
];

export const REGISTER_HREF = "/register";
