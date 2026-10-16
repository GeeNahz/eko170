import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { RaceOptionCard } from "../../components/race-option-card";
import { RACE_OPTION_CARDS } from "../constants";

export function RouteCategories() {
  return (
    <div className="overflow-hidden bg-white px-5 pt-8 pb-5 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-brand-cream sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Race Categories
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-12 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Two Distances. One City.
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {RACE_OPTION_CARDS.map((card) => (
            <RevealItem key={card.id}>
              <RaceOptionCard card={card} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
