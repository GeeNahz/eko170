import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SponsorLogo } from "../../lib/types";
import { PARTNER_LOGOS, SPONSOR_LOGOS } from "../constants";

function LogoRow({
  logos,
  duration,
  cardWidth,
  cardHeight,
}: {
  logos: SponsorLogo[];
  duration: string;
  cardWidth: number;
  cardHeight: number;
}) {
  const track = (
    <div className="flex items-center">
      {logos.map((logo) => (
        <div
          key={logo.id}
          style={{ width: cardWidth, height: cardHeight }}
          className="relative mr-6 shrink-0 rounded-2xl border border-brand-cream-border bg-white"
        >
          <Image src={logo.src} alt={logo.name} fill className="object-contain p-5" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className="animate-marquee flex w-max" style={{ ["--marquee-duration" as string]: duration }}>
        {track}
        {track}
      </div>
    </div>
  );
}

export function SponsorsMarquee() {
  return (
    <div
      id="sponsors"
      className="mx-4 mt-4 overflow-hidden rounded-[22px] border-t border-brand-cream-border bg-brand-cream px-6 py-24 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
              Our Sponsors
            </div>
            <h2 className="font-heading text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
              Backed by the Best
            </h2>
          </div>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
          >
            Partnership Info
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mb-5 font-mono text-xs tracking-wide text-gray-400 uppercase">
          Sponsors
        </div>
        <div className="mb-12">
          <LogoRow logos={SPONSOR_LOGOS} duration="32s" cardWidth={220} cardHeight={104} />
        </div>

        <div className="mb-5 font-mono text-xs tracking-wide text-gray-400 uppercase">
          Partners
        </div>
        <LogoRow logos={PARTNER_LOGOS} duration="48s" cardWidth={180} cardHeight={96} />
      </div>
    </div>
  );
}
