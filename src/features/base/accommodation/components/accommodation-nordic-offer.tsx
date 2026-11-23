import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function AccommodationNordicOffer() {
  return (
    <div className="mx-auto w-full max-w-[720px] px-5 pt-10 sm:px-10">
      <Reveal className="flex flex-col items-center gap-5 rounded-2xl border border-brand-cream-border bg-white p-6 text-center sm:flex-row sm:items-center sm:gap-6 sm:p-8 sm:text-left">
        <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl border border-brand-cream-border bg-white p-3">
          <Image
            src="/sponsors/logo-NordicHotels.svg"
            alt="Nordic Hotel Lagos"
            width={72}
            height={72}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div>
          <div className="mb-1.5 font-mono text-xs tracking-wide text-brand-green uppercase">
            Rider Accommodation Offer
          </div>
          <p className="font-sans text-sm leading-relaxed text-gray-600">
            Nordic Hotel Lagos offers discounted room rates for EKO170 riders.
            Fill in your details below and the hotel will reach out to confirm
            your booking and rate.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
