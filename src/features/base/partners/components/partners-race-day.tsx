import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { POCARI_SWEAT_PARTNER, RACE_DAY_SUPPORT_PARTNERS } from "../constants";

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
              className="flex flex-col items-center rounded-2xl border border-brand-cream-border bg-white p-5 text-center sm:items-start sm:p-6 sm:text-left"
            >
              <div className="mb-3 flex aspect-video w-full items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={160}
                  height={90}
                  className="max-h-full max-w-[70%] object-contain sm:max-w-[65%]"
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

        <Reveal className="rounded-2xl border border-brand-cream-border bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-cream-border bg-white p-2.5">
              <Image
                src={POCARI_SWEAT_PARTNER.src}
                alt={POCARI_SWEAT_PARTNER.name}
                width={56}
                height={56}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="hidden h-10 w-px bg-brand-cream-border sm:block" />
            <p className="font-sans text-sm leading-relaxed text-gray-600">
              {POCARI_SWEAT_PARTNER.description}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
