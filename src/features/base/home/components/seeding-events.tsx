import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SEEDING_EVENTS } from "../constants";

export function SeedingEvents() {
  return (
    <div
      id="seeding"
      className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-cream px-6 py-24 [scroll-margin-top:140px] sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading mb-3 text-center text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[48px]">
          Seeding Events
        </h2>
        <p className="mb-14 text-center font-sans text-[17px] text-gray-500">
          All Available Seeding Race Events
        </p>
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SEEDING_EVENTS.map((event) => (
            <RevealItem
              key={event.id}
              className="grid min-h-[280px] grid-cols-[96px_1fr] overflow-hidden rounded-2xl bg-brand-teal"
            >
              <div className="relative flex items-center justify-center overflow-hidden bg-brand-green">
                <svg
                  viewBox="0 0 40 40"
                  className="absolute -bottom-7.5 -left-7.5 size-[150px]"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="2"
                >
                  <circle cx="20" cy="20" r="18" />
                  <circle cx="20" cy="20" r="3.5" />
                  <line x1="20" y1="2" x2="20" y2="38" />
                  <line x1="2" y1="20" x2="38" y2="20" />
                </svg>
                <span className="font-heading relative rotate-180 text-[40px] font-black tracking-wide text-white [writing-mode:vertical-rl]">
                  {event.distanceLabel}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 px-7 py-9 text-center">
                <div className="font-sans text-sm text-gray-400">{event.location}</div>
                <h3 className="font-heading text-2xl leading-tight font-bold text-white">
                  {event.title}
                </h3>
                <div className="font-sans text-sm text-white/75">
                  {event.dateLabel} | {event.terrainLabel} | {event.distanceLabel}
                </div>
                <Link
                  href={event.registerHref}
                  className="mt-1.5 inline-flex h-[42px] items-center rounded-full bg-white px-7.5 font-sans text-sm font-semibold text-brand-teal"
                >
                  Visit Race
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
