"use client";

import { useGetEventDetails } from "../hooks/use-event";

export function Ticker() {
  const { data: event } = useGetEventDetails();
  const facts = event?.tickerFacts ?? [];

  if (facts.length === 0) return null;

  const track = (
    <div className="flex items-center">
      {facts.map((fact, index) => (
        <span key={index} className="flex items-center">
          <span className="px-6 font-mono text-[11px] tracking-wider text-brand-cream uppercase whitespace-nowrap">
            {fact}
          </span>
          <span className="text-[10px] text-brand-green">●</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-brand-teal-deep py-2.5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] sm:mx-4 sm:mt-3.5 sm:rounded-full">
      <div className="flex w-max animate-marquee [--marquee-duration:26s]">
        {track}
        {track}
      </div>
    </div>
  );
}
