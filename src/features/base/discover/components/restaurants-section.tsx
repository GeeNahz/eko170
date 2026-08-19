import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { RESTAURANT_CARDS } from "../constants";

export function RestaurantsSection() {
  return (
    <div
      id="restaurants"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] border-t border-brand-cream-border bg-brand-cream px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Eat
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Fuel &amp; Feast
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-11 max-w-[680px] font-sans text-lg leading-relaxed text-gray-500"
        >
          Carb-load the Lagos way — from waterfront fine dining to the
          best street food on the continent.
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {RESTAURANT_CARDS.map((card) => (
            <RevealItem
              key={card.id}
              className="rounded-2xl border border-brand-cream-border bg-white p-7"
            >
              <h3 className="font-heading mb-2 text-xl font-extrabold text-brand-teal uppercase">
                {card.title}
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-gray-500">
                {card.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
