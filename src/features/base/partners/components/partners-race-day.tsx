import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { RACE_DAY_SUPPORT_PARTNERS, RACE_DAY_WIDE_PARTNERS } from "../constants";

export function PartnersRaceDay() {
  return (
    <div className="mx-3 mt-10 sm:mx-4 sm:mt-14">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-6">
        <Reveal className="font-heading mb-6 text-2xl font-extrabold text-brand-teal uppercase sm:text-3xl">
          Race-Day Support
        </Reveal>

        <RevealGroup className="mb-5 grid grid-cols-2 gap-5">
          {RACE_DAY_SUPPORT_PARTNERS.map((partner) => (
            <RevealItem
              key={partner.id}
              className="flex flex-col items-start rounded-2xl border border-brand-cream-border bg-white p-4 text-left sm:p-5"
            >
              <div
                className={cn(
                  "mb-3 flex w-full items-center justify-center",
                  partner.large ? "h-22" : "h-18",
                )}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.large ? 170 : 150}
                  height={partner.large ? 88 : 72}
                  className={cn(
                    "max-h-full object-contain",
                    // logo-medbury.jpg is a small, padded 150x150
                    // source — the taller box plus a looser width cap
                    // is what makes it read as bigger than AVIS's
                    // tightly-cropped file, not the percentage alone.
                    partner.large ? "max-w-[95%]" : "max-w-[88%]",
                  )}
                />
              </div>
              {partner.billing && (
                <div className="font-sans text-sm font-semibold text-brand-teal">
                  {partner.billing}
                </div>
              )}
              {partner.description && (
                <p className="mt-1 font-sans text-xs leading-relaxed text-gray-500">
                  {partner.description}
                </p>
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="flex flex-col gap-4">
          {RACE_DAY_WIDE_PARTNERS.map((partner) => (
            <Reveal
              key={partner.id}
              className="rounded-2xl border border-brand-cream-border bg-white p-3 sm:p-4"
            >
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex h-18 w-18 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-brand-cream-border bg-white p-1">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={72}
                    height={72}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {partner.description && (
                  <>
                    <div className="hidden h-10 w-px bg-brand-cream-border sm:block" />
                    <p className="font-sans text-sm leading-relaxed text-gray-600">
                      {partner.description}
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
