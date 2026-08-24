import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SUSTAINABILITY_CARDS } from "../constants";

export function SustainabilitySection() {
  return (
    <div
      id="sustainability"
      className="mx-3 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-brand-teal px-5 pt-10 pb-11 sm:mx-4 sm:bg-brand-teal-deep sm:px-10 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-yellow pl-3 font-mono text-xs tracking-wide text-brand-yellow uppercase">
          Greener Riding
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-11 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl"
        >
          Sustainability
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SUSTAINABILITY_CARDS.map((card) => (
            <RevealItem
              key={card.id}
              className="rounded-2xl border border-white/12 bg-white/5 p-8"
            >
              <h3 className="font-heading mb-2 text-xl font-extrabold text-white uppercase">
                {card.title}
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-white/70">
                {card.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
