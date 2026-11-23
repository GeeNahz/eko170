import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ACCOMMODATION_PARTNER } from "../constants";

export function PartnersAccommodationStrip() {
  return (
    <div className="mx-3 mt-10 overflow-hidden rounded-[22px] bg-brand-cream px-5 py-9 sm:mx-4 sm:mt-14 sm:px-10 sm:py-12">
      <Reveal className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-brand-cream-border bg-white p-0">
            <Image
              src={ACCOMMODATION_PARTNER.src}
              alt={ACCOMMODATION_PARTNER.name}
              width={64}
              height={64}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <div className="mb-1.5 font-mono text-xs tracking-wide text-brand-green uppercase">
              Rider Accommodation Offer
            </div>
            <p className="max-w-[480px] font-sans text-sm leading-relaxed text-gray-600">
              {ACCOMMODATION_PARTNER.description}
            </p>
          </div>
        </div>
        <Link
          href="/accommodation"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand-green px-7 py-3.5 font-sans text-sm font-semibold text-white"
        >
          Book reservations
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </div>
  );
}
