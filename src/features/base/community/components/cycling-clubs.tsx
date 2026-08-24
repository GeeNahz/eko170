import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CLUB_CARDS } from "../constants";

export function CyclingClubs() {
  return (
    <div
      id="clubs"
      className="mx-3 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] border-t border-brand-cream-border bg-brand-cream px-5 pt-10 pb-11 sm:mx-4 sm:px-10 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Ride Together
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Cycling Clubs
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-11 max-w-[680px] font-sans text-lg leading-relaxed text-gray-500"
        >
          EKO170 is built on the clubs that ride Lagos every weekend —
          come as a team, start as a team.
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CLUB_CARDS.map((card) => (
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
