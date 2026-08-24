"use client";

import Link from "next/link";
import { REGISTER_HREF } from "../../navigation/constants";
import { useGetEventDetails } from "../../event/hooks/use-event";
import { useCountdown } from "../../event/hooks/use-countdown";
import { DISTANCE_STATS, EVENT_CARDS } from "../constants";

export function EventGroupMobile() {
  const { data: event } = useGetEventDetails();
  const { days, hours, minutes, seconds } = useCountdown(event?.eventDate);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="bg-[#0b1f25] pb-8">
      <div className="flex flex-col gap-4 px-3.5 pt-10">
        {EVENT_CARDS.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between gap-4 rounded-[18px] bg-white px-6 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          >
            <div>
              <div className="font-heading text-lg leading-tight font-extrabold text-brand-teal uppercase">
                {card.title}
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
                Event Date · {card.dateLabel}
              </div>
            </div>
            <div className="font-heading shrink-0 text-3xl font-black text-brand-green">
              {card.distanceLabel}
            </div>
          </div>
        ))}

        <div className="flex gap-3">
          {EVENT_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.registerHref}
              className="flex-1 rounded-full bg-brand-green px-4 py-3 text-center font-sans text-sm font-semibold text-white"
            >
              {card.registerLabel}
            </Link>
          ))}
        </div>

        <Link
          href={EVENT_CARDS[0].resultsHref}
          className="text-center font-sans text-sm font-semibold text-white/80 underline underline-offset-4"
        >
          Results
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-y-6 px-3.5 py-7">
        {DISTANCE_STATS.map((stat) => (
          <div key={stat.id} className="px-4 text-center">
            <div className="mb-1.5 font-mono text-[11px] tracking-wide text-gray-500 uppercase">
              {stat.label}
            </div>
            <div className="font-sans text-xl font-semibold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-brand-green px-3.5 py-7">
        <div className="mb-1.5 font-mono text-[11px] tracking-wide text-white/80 uppercase">
          Registration Open
        </div>
        <div className="mb-5 font-sans text-lg font-semibold text-white">
          Registration opens 12 November 2025 at 10am WAT. Secure your place now.
        </div>
        <Link
          href={REGISTER_HREF}
          className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-6 py-4 font-sans text-sm font-semibold text-brand-teal"
        >
          Register Now
        </Link>
      </div>

      <div className="px-3.5 pt-10 text-center">
        <div className="mb-4 font-mono text-xs tracking-[3px] text-brand-yellow uppercase">
          — Race Day Countdown
        </div>
        <h2 className="font-heading mb-8 text-[40px] leading-[0.95] font-black text-white italic uppercase">
          The Clock Is Ticking
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-2">
              <div className="w-[72px] rounded-2xl border border-white/10 bg-white/[0.06] py-3">
                <div className="font-heading text-2xl leading-none font-black text-brand-green">
                  {unit.value}
                </div>
                <div className="mt-1.5 font-mono text-[8px] tracking-wide text-gray-500 uppercase">
                  {unit.label}
                </div>
              </div>
              {i < units.length - 1 && (
                <div className="font-heading hidden self-center text-3xl font-black text-white/35">
                  –
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
