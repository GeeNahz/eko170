import { Reveal } from "@/components/motion/reveal";

export function RouteMap() {
  return (
    <div
      id="map"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-white px-6 py-24 sm:px-10"
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
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.3691%2C6.3899%2C3.4620%2C6.4432&layer=mapnik&marker=6.4166%2C3.4155"
            title="EKO170 course map — Eko Atlantic City"
            className="block h-[520px] w-full border-0"
            loading="lazy"
          />
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
