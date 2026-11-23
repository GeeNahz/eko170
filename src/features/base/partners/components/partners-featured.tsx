import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FEATURED_PARTNERS } from "../constants";

export function PartnersFeatured() {
  return (
    <div id="partners" className="mx-3 mt-10 scroll-mt-[140px] sm:mx-4 sm:mt-14">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-6">
        <Reveal className="font-heading mb-6 text-2xl font-extrabold text-brand-teal uppercase sm:text-3xl">
          Featured Partners
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURED_PARTNERS.map((partner) => (
            <RevealItem
              key={partner.id}
              className="rounded-2xl border border-brand-cream-border bg-white p-4 sm:p-5"
            >
              <div className="mb-3 flex h-20 items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="max-h-full max-w-[88%] object-contain"
                />
              </div>
              {partner.billing && (
                <span className="mb-2 inline-block rounded-full bg-brand-green/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-brand-green uppercase">
                  {partner.billing}
                </span>
              )}
              <p className="font-sans text-sm leading-relaxed text-gray-500">
                {partner.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
