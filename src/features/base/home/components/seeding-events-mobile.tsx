import Link from "next/link";
import { SEEDING_EVENTS } from "../constants";

export function SeedingEventsMobile() {
  return (
    <div
      id="seeding"
      className="overflow-hidden bg-brand-cream pt-11 pb-12 [scroll-margin-top:140px]"
    >
      <div className="px-5">
        <h2 className="font-heading mb-3 text-center text-4xl leading-[0.95] font-black text-brand-teal italic uppercase">
          Seeding Events
        </h2>
        <p className="mb-8 text-center font-sans text-[15px] text-gray-500">
          All Available Seeding Race Events
        </p>
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
        {SEEDING_EVENTS.map((event) => (
          <div
            key={event.id}
            className="flex w-[220px] shrink-0 snap-start flex-col items-center gap-2.5 rounded-2xl bg-brand-teal px-6 py-8 text-center"
          >
            <div className="font-heading text-[40px] leading-none font-black text-white">
              {event.distanceLabel}
            </div>
            <div className="font-sans text-sm text-gray-400">{event.location}</div>
            <h3 className="font-heading text-xl leading-tight font-bold text-white">
              {event.title}
            </h3>
            <div className="font-sans text-xs text-white/75">
              {event.dateLabel} | {event.terrainLabel} | {event.distanceLabel}
            </div>
            <Link
              href={event.registerHref}
              className="mt-1.5 inline-flex h-10 items-center rounded-full bg-white px-6 font-sans text-sm font-semibold text-brand-teal"
            >
              Visit Race
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
