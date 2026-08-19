import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TRANSPORT_CARDS } from "../constants";

export function TransportSection() {
  return (
    <div
      id="transport"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-brand-teal-deep px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-yellow pl-3 font-mono text-xs tracking-wide text-brand-yellow uppercase">
          Move
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-11 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl"
        >
          Getting Around
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TRANSPORT_CARDS.map((card) => (
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
