import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ROUTE_HIGHLIGHTS, ROUTE_STATS } from "../../routes/constants";

export function AtlanticChallengeMobile() {
  return (
    <div id="route" className="overflow-hidden bg-white px-5 pt-11 pb-12">
      <Reveal>
        <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Route Preview
        </div>
        <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase">
          The Atlantic
          <br />
          Challenge
        </h2>
        <div className="mb-7 -mt-3.5 font-heading text-xl font-semibold tracking-wide text-gray-500 uppercase">
          170KM on Closed Roads
        </div>
        <p className="mb-8 font-sans text-base leading-relaxed text-gray-500">
          Roads completely closed to traffic. Starting and finishing at Eko
          Atlantic City, the 170KM Full Ride takes you through Victoria
          Island, Ahmadu Bello Way, over the Lekki–Ikoyi Bridge, along the
          Lekki–Epe Expressway, through the Dangote Refinery corridor, and
          into the open countryside of Epe.
        </p>

        <div className="mb-8 overflow-hidden rounded-2xl border border-brand-cream-border">
          <div className="flex h-[220px] flex-col items-center justify-center gap-2 bg-brand-teal">
            <MapPin className="size-7 text-brand-yellow" />
            <span className="font-mono text-xs tracking-wide text-white/70 uppercase">
              Interactive route map coming soon
            </span>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4">
          {ROUTE_STATS.map((stat) => (
            <div key={stat.id} className="rounded-xl border border-brand-cream-border px-6 py-4">
              <div className="mb-1.5 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
                {stat.label}
              </div>
              <div className="font-sans text-base font-semibold text-brand-teal">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-col gap-2">
          <div className="mb-0.5 font-mono text-xs tracking-wide text-brand-green uppercase">
            Route Highlights
          </div>
          {ROUTE_HIGHLIGHTS.map((highlight) => (
            <div key={highlight} className="relative pl-5 font-sans text-sm text-gray-600">
              <span className="absolute left-0 text-brand-green">›</span>
              {highlight}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/routes"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-green px-6 py-4 font-sans text-sm font-semibold text-white"
          >
            Full Route Details
            <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
          >
            <Download className="size-4" />
            Download GPX
          </button>
        </div>
      </Reveal>
    </div>
  );
}
