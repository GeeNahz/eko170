import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CHARITY_CARDS } from "../constants";

export function CharityCauses() {
  return (
    <div
      id="charity"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-white px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Ride for Good
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Charity &amp; Causes
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-11 max-w-[680px] font-sans text-lg leading-relaxed text-gray-500"
        >
          Every kilometre gives back — riding EKO170 funds safer streets
          and youth sport across Lagos.
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CHARITY_CARDS.map((card) => (
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
