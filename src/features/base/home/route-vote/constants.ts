import { ROUTE_170_PATH, ROUTE_VOTE_OPTION_A_PATH } from "../../routes/constants";
import type { RouteVoteOption } from "./types";

export const ROUTE_VOTE_OPTIONS: RouteVoteOption[] = [
  {
    id: "a",
    eyebrow: "Option A",
    title: "Ikorodu / Imota Loop",
    description:
      "A true loop north through Ikorodu and Imota before the run back down to Epe. More varied roads, more countryside.",
    shape: "Full loop",
    character: "Rolling, varied",
    path: ROUTE_VOTE_OPTION_A_PATH,
    mapImage: "/images/route-vote-option-a.png",
  },
  {
    id: "b",
    eyebrow: "Option B",
    title: "Lekki–Epe Corridor",
    description:
      "Out and back along the Lekki–Epe expressway. Wider, faster, and simpler to close and marshal end to end.",
    shape: "Out & back",
    character: "Fast, flat",
    path: ROUTE_170_PATH,
    mapImage: "/images/route-vote-option-b.png",
  },
];

export const DISTANCE_OPTIONS = ["Gran Fondo · 170KM", "Medio Fondo · 94.5KM", "Undecided"];

// Option B won the rider vote (confirmed 2026-10-12). Read by
// route-vote-section.tsx's "starting_soon" branch to render the
// confirmed route's map alongside the announcement copy.
export const CONFIRMED_ROUTE_ID: RouteVoteOption["id"] | null = "b";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Client-side only — see route-vote-section.tsx for the caveat this implies.
export const VOTE_STORAGE_KEY = "eko170-route-vote";
