"use client";

import { useGetEventDetails } from "../../event/hooks/use-event";
import { useCountdown } from "../../event/hooks/use-countdown";

export function CountdownSection() {
  const { data: event } = useGetEventDetails();
  const { days, hours, minutes, seconds } = useCountdown(event?.eventDate);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] border-b border-white/[0.06] bg-[#030712] px-6 py-20 text-center sm:px-10">
      <div className="mb-4 font-mono text-xs tracking-[3px] text-brand-yellow uppercase">
        — Race Day Countdown
      </div>
      <h2 className="font-heading mb-10 text-[40px] leading-[0.95] font-black text-white italic uppercase sm:text-[64px]">
        The Clock Is Ticking
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-4">
            <div className="w-[110px] rounded-2xl border border-white/10 bg-white/[0.06] py-6 sm:w-[148px] sm:py-8">
              <div className="font-heading text-5xl leading-none font-black text-brand-green sm:text-[72px]">
                {unit.value}
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-wide text-gray-500 uppercase">
                {unit.label}
              </div>
            </div>
            {i < units.length - 1 && (
              <div className="font-heading self-center text-3xl font-black text-white/35 sm:text-5xl">
                –
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
