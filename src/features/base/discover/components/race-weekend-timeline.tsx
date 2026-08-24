import { Reveal } from "@/components/motion/reveal";
import { RACE_WEEKEND_TIMELINE } from "../constants";

export function RaceWeekendTimeline() {
  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-white px-5 pt-10 pb-11 sm:mx-4 sm:px-10 sm:py-24">
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Plan
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          The Race Weekend
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-11 max-w-[680px] font-sans text-lg leading-relaxed text-gray-500"
        >
          Three days, one city. A simple rhythm to arrive fresh, ride
          strong and celebrate hard.
        </Reveal>

        <div className="flex max-w-[820px] flex-col">
          {RACE_WEEKEND_TIMELINE.map((day, i) => (
            <Reveal
              key={day.id}
              delay={i * 0.05}
              className={`grid grid-cols-[64px_24px_1fr] items-start gap-5.5 sm:grid-cols-[88px_24px_1fr] ${
                i < RACE_WEEKEND_TIMELINE.length - 1 ? "pb-8.5" : "pb-0"
              }`}
            >
              <div className="font-heading text-3xl leading-none font-black text-brand-green italic">
                {day.day}
              </div>
              <div className="flex h-full flex-col items-center">
                <div className="size-3.5 shrink-0 rounded-full border-[3px] border-green-100 bg-brand-green" />
                {i < RACE_WEEKEND_TIMELINE.length - 1 && (
                  <div className="mt-1.5 w-0.5 flex-1 bg-brand-cream-border" />
                )}
              </div>
              <div>
                <div className="font-heading mb-1 text-2xl font-extrabold text-brand-teal uppercase">
                  {day.title}
                </div>
                <div className="font-sans text-[15px] leading-relaxed text-gray-500">
                  {day.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
