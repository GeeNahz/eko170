import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { HEADLINE_PARTNERS } from "../constants";

export function HeadlinePartners() {
  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-white px-5 pt-10 pb-11 sm:mx-auto sm:mt-0 sm:w-full sm:max-w-[1280px] sm:rounded-none sm:bg-transparent sm:px-10 sm:py-24">
      <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
        Headline Partners
      </Reveal>
      <Reveal
        delay={0.1}
        className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
      >
        Title &amp; Presenting
      </Reveal>
      <Reveal
        delay={0.15}
        className="mb-11 max-w-[680px] font-sans text-lg leading-relaxed text-gray-500"
      >
        The organisations at the very front of the peloton — powering
        EKO170 from start line to finish festival.
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {HEADLINE_PARTNERS.map((partner) => (
          <RevealItem
            key={partner.id}
            className="flex flex-col gap-6 rounded-2xl border border-brand-cream-border bg-brand-cream p-10"
          >
            <div className="font-mono text-[11px] tracking-[2px] text-brand-green uppercase">
              {partner.tierLabel}
            </div>
            <div className="flex h-22 items-center">
              <Image
                src={partner.logoSrc}
                alt={partner.logoAlt}
                width={220}
                height={88}
                className="max-h-18 w-auto max-w-[70%] object-contain"
              />
            </div>
            <p className="font-sans text-[15px] leading-relaxed text-gray-500">
              {partner.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
