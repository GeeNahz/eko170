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
      className="overflow-hidden bg-brand-cream pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:border-t sm:border-brand-cream-border sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-0">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="flex items-center justify-between gap-6 sm:block">
            <div className="border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase sm:mb-4">
              Our Sponsors
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-5 py-2.5 font-sans text-sm font-semibold text-brand-green sm:hidden"
            >
              Partnership Info
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <h2 className="font-heading text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
            Backed by the Best
          </h2>
          <Link
            href="/partners"
            className="hidden items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green sm:inline-flex"
          >
            Partnership Info
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mb-5 font-mono text-xs tracking-wide text-gray-400 uppercase">
          Sponsors
        </div>
        <div className="-mx-5 mb-12 sm:mx-0">
          <LogoRow logos={SPONSOR_LOGOS} duration="32s" cardWidth={220} cardHeight={104} />
        </div>

        <div className="mb-5 font-mono text-xs tracking-wide text-gray-400 uppercase">
          Partners
        </div>
        <div className="-mx-5 sm:mx-0">
          <LogoRow logos={PARTNER_LOGOS} duration="48s" cardWidth={180} cardHeight={96} />
        </div>
      </div>
    </div>
  );
}
