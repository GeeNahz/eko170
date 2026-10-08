import "server-only";
import { REGISTRATION_STATE } from "../constants";
import type { RegistrationConfig, RegistrationState } from "../types";

const STATES: Record<RegistrationState, RegistrationConfig> = {
  "pre-register": {
    state: "pre-register",
    href: "/#routevote",
    label: "Pre-register Now",
    isOpen: false,
    opensAt: "2026-10-13T00:00:00+01:00",
    opensAtLabel: "13 October 2026",
  },
  register: {
    state: "register",
    href: "/register",
    label: "Register Now",
    isOpen: true,
    opensAt: null,
    opensAtLabel: null,
  },
};

// Resolved once, server-side, from REGISTRATION_STATE — deliberately
// not NEXT_PUBLIC_-prefixed. Client Components that need this receive
// it as a `registration` prop from their nearest Server Component
// ancestor (see site-header.tsx, home-revamped.tsx, route-detail.tsx),
// never by importing this module directly.
export const REGISTRATION =
  STATES[REGISTRATION_STATE === "register" ? "register" : "pre-register"];
