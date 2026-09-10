"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` on load, so the actual map view is excluded
// from SSR entirely. This file must be a Client Component itself for
// Next.js to allow `ssr: false` here — server components (AtlanticChallenge,
// RouteMap) can still import and render it like any other client component.
export const RouteMapEmbed = dynamic(
  () => import("./route-map-view").then((m) => m.RouteMapView),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[220px] items-center justify-center bg-brand-teal">
        <span className="font-mono text-xs tracking-wide text-white/60 uppercase">
          Loading map…
        </span>
      </div>
    ),
  },
);
