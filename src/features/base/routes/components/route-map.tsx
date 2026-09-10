import { Reveal } from "@/components/motion/reveal";
import { RouteMapEmbed } from "../../lib/components/route-map-embed";
import { ROUTE_170_PATH } from "../constants";

export function RouteMap() {
  return (
    <div
      id="map"
      className="scroll-mt-[140px] overflow-hidden bg-white px-5 pt-9 pb-11 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Explore
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-12 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Interactive Map
        </Reveal>

        <Reveal
          delay={0.2}
          className="overflow-hidden rounded-2xl border border-brand-cream-border shadow-[0_12px_40px_rgba(16,24,40,0.08)]"
        >
          <div className="h-[320px] sm:h-[520px]">
            <RouteMapEmbed
              path={ROUTE_170_PATH}
              height="100%"
              startLabel="Eko Atlantic City"
              finishLabel="Epe"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-cream-border bg-brand-cream px-6 py-4">
            <span className="font-mono text-xs tracking-wide text-gray-500 uppercase">
              Start / Finish · Eko Atlantic City, Lagos
            </span>
            <a
              href="https://www.openstreetmap.org/?mlat=6.4166&mlon=3.4155#map=14/6.4166/3.4155"
              target="_blank"
              rel="noopener"
              className="font-sans text-sm font-semibold text-brand-green"
            >
              Open full map ↗
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
