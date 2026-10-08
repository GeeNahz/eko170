import Image from "next/image";
import { SPONSOR_LOGOS } from "../constants";

export function SponsorsMarquee() {
  return (
    <div
      id="sponsors"
      className="overflow-hidden bg-brand-cream pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:border-t sm:border-brand-cream-border sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-0">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase sm:mb-4">
            Our Sponsors
          </div>
          <h2 className="font-heading text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
            Backed by the Best
          </h2>
        </div>

        <div className="mb-5 font-mono text-xs tracking-wide text-gray-400 uppercase">
          Sponsors
        </div>
        <div
          style={{ width: 220, height: 104 }}
          className="relative rounded-2xl border border-brand-cream-border bg-white"
        >
          <Image
            src={SPONSOR_LOGOS[0].src}
            alt={SPONSOR_LOGOS[0].name}
            fill
            className="object-contain p-5"
          />
        </div>
      </div>
    </div>
  );
}
