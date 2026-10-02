import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ROUTE_VOTE_OPTIONS } from "../constants";

export function RouteVoteSection() {
  return (
    <div
      id="routevote"
      className="overflow-hidden bg-white px-5 pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Rider Vote · Closed
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-4 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]"
        >
          Which Route
          <br />
          Should We Ride?
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-gray-600 sm:text-lg"
        >
          Voting is now closed. Thank you to everyone who voted — we will
          announce the confirmed 2027 Gran Fondo course soon.
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {ROUTE_VOTE_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="overflow-hidden rounded-[18px] border-[1.5px] border-brand-cream-border bg-white"
            >
              <div className="px-4 pt-4 pb-3.5 sm:px-6 sm:pt-6">
                <span className="font-mono text-[10px] tracking-wide text-gray-400 uppercase">
                  {option.eyebrow}
                </span>
                <div className="font-heading mb-1.5 text-2xl leading-none font-extrabold text-brand-teal uppercase sm:text-[28px]">
                  {option.title}
                </div>
                <div className="font-sans text-sm leading-relaxed text-gray-600">
                  {option.description}
                </div>
              </div>
              <div className="relative h-44 border-t border-brand-cream-border sm:h-64">
                <Image
                  src={option.mapImage}
                  alt={`${option.title} route map`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex gap-5 border-t border-brand-cream-border px-4 py-3 sm:px-6">
                <div>
                  <div className="font-mono text-[9px] tracking-wide text-gray-400 uppercase">
                    Shape
                  </div>
                  <div className="font-sans text-sm font-semibold text-brand-teal">
                    {option.shape}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-wide text-gray-400 uppercase">
                    Character
                  </div>
                  <div className="font-sans text-sm font-semibold text-brand-teal">
                    {option.character}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
