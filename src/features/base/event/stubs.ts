import type { EventDetails } from "./types";

export const STUB_EVENT_DETAILS: EventDetails = {
  id: "eko170-2027",
  name: "EKO170",
  eventDate: "2027-01-10T07:00:00+01:00",
  dateLabel: "10 January 2027 · Eko Atlantic City · Lagos",
  location: "Eko Atlantic City, Lagos",
  distancesKm: [170, 70],
  tickerFacts: [
    "EKO170",
    "RIDE LAGOS",
    "10 · 01 · 2027",
    "170KM / 70KM",
    "EKO ATLANTIC CITY",
    "CLOSED ROADS",
  ],
  contactEmail: "Info@eko170.com",
  contactTwitter: "@eko170info",
  socials: [
    { id: "social-instagram", platform: "instagram", href: "#" },
    { id: "social-twitter", platform: "twitter", href: "#" },
    { id: "social-facebook", platform: "facebook", href: "#" },
  ],
};
