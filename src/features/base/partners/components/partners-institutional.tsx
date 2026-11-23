import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { INSTITUTIONAL_PARTNER } from "../constants";

export function PartnersInstitutional() {
  return (
    <div className="mx-3 mt-10 sm:mx-4 sm:mt-14">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-6">
        <Reveal className="font-heading mb-6 text-2xl font-extrabold text-brand-teal uppercase sm:text-3xl">
          Institutional Partnership
        </Reveal>

        <Reveal className="rounded-2xl border border-brand-cream-border bg-white p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl border border-brand-cream-border bg-white p-0">
              <Image
                src={INSTITUTIONAL_PARTNER.src}
                alt={INSTITUTIONAL_PARTNER.name}
                width={72}
                height={72}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="hidden h-12 w-px bg-brand-cream-border sm:block" />
            <h3 className="font-heading text-xl font-extrabold text-brand-teal uppercase sm:text-2xl">
              {INSTITUTIONAL_PARTNER.name}
            </h3>
          </div>
          <p className="mt-4 font-sans text-sm leading-relaxed text-gray-500 sm:mt-5">
            {INSTITUTIONAL_PARTNER.description}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
