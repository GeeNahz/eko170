import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { GOVERNMENT_PARTNER_LOGOS } from "../constants";

export function PartnersGovernment() {
  return (
    <div
      id="government"
      className="mx-3 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-white px-5 pt-10 pb-11 sm:mx-4 sm:border-t sm:border-brand-cream-border sm:bg-brand-cream sm:px-10 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Institutional Support
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Government
        </Reveal>
        <Reveal
          delay={0.15}
          className="font-heading -mt-2 mb-9 text-xl font-semibold tracking-wide text-gray-500 uppercase"
        >
          Backed by Lagos State
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {GOVERNMENT_PARTNER_LOGOS.map((logo) => (
            <RevealItem
              key={logo.id}
              className="group flex aspect-video items-center justify-center rounded-2xl border border-brand-cream-border bg-white p-5"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={90}
                className="max-h-[74%] max-w-[80%] object-contain transition-transform duration-300 ease-out group-hover:scale-[1.06]"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
