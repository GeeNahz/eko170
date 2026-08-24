import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";
import type { RouteDetailData } from "../types";

export function RouteMoreAbout({ data }: { data: RouteDetailData }) {
  return (
    <div
      id="more"
      className="mx-3 mt-4 scroll-mt-[170px] overflow-hidden rounded-[22px] bg-brand-teal px-5 pt-11 pb-12 sm:mx-4 sm:bg-brand-teal-deep sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="font-heading mb-2 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
          More About the {data.navLabel}
        </Reveal>
        <Reveal delay={0.1} className="mb-12 font-sans text-sm text-white/60">
          Please note — additional information
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.moreAboutCards.map((card) => (
            <RevealItem
              key={card.id}
              className="flex flex-col gap-3 rounded-2xl border border-white/14 bg-white/10 p-7 text-center"
            >
              <h3 className="font-heading text-2xl font-bold tracking-wide text-white">
                {card.title}
              </h3>
              <p className="flex-1 font-sans text-[13.5px] leading-relaxed text-white/75">
                {card.description}
              </p>
              <Link
                href={REGISTER_HREF}
                className="mx-auto inline-flex h-8.5 items-center rounded-full bg-brand-yellow px-5 font-sans text-xs font-bold text-brand-teal"
              >
                More Info
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
