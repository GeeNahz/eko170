"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";
import { useCountdown } from "../../event/hooks/use-countdown";
import { useGetEventDetails } from "../../event/hooks/use-event";
import { DISTANCE_STATS, EVENT_CARDS } from "../constants";

// Replaces EventBar + DistanceBar + RegistrationBanner + CountdownSection
// (desktop) / EventGroupMobile (mobile) for the revamped Home only — the
// new mockup merges all four into one continuous card+stats+countdown
// block (id="register"), a real structural difference from how those
// four components are still built (and still used, unchanged, by
// HomeCurrent). Single responsive component rather than a mobile/desktop
// split since nothing here needs a different element order at `lg:`.
export function EventCardSection() {
  const { data: event } = useGetEventDetails();
  const { days, hours, minutes, seconds } = useCountdown(event?.eventDate);

  const countdownUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="bg-[#0b1f25] px-3.5 pt-10 pb-12 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between bg-brand-teal px-5 py-4 sm:px-8">
            <span className="font-mono text-[10px] tracking-[2.2px] text-brand-yellow uppercase">
              The Event
            </span>
            <span className="font-mono text-[10px] tracking-[2.2px] text-white/60 uppercase">
              10 Jan 2027
            </span>
          </div>
          {EVENT_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between gap-3.5 border-b border-brand-cream-border px-5 py-5 sm:px-8"
            >
              <div>
                <div className="font-heading text-xl leading-none font-extrabold text-brand-teal uppercase sm:text-2xl">
                  {card.title}
                </div>
                <div className="mt-1.5 font-mono text-[10.5px] tracking-wide text-gray-400 uppercase">
                  Event Date · {card.dateLabel}
                </div>
              </div>
              <div className="font-heading shrink-0 text-3xl font-black text-brand-green italic sm:text-4xl">
                {card.distanceLabel}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-px bg-brand-cream-border">
            {EVENT_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.registerHref}
                className="flex min-h-14 items-center justify-center bg-white px-2 text-center font-sans text-sm font-bold text-brand-green"
              >
                {card.registerLabel}
              </Link>
            ))}
            <Link
              href={EVENT_CARDS[0].resultsHref}
              className="col-span-2 flex min-h-14 items-center justify-center bg-white font-sans text-sm font-bold text-brand-teal"
            >
              Results
            </Link>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-3.5 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-white/10 bg-white/10"
        >
          {DISTANCE_STATS.map((stat) => (
            <div key={stat.id} className="bg-[#0b1f25] px-3.5 py-4 sm:px-6">
              <div className="font-mono text-[10px] tracking-wide text-white/50 uppercase">
                {stat.label}
              </div>
              <div
                className={
                  "font-heading mt-1.5 text-2xl font-black " +
                  (stat.id === "dist-date" ? "text-brand-yellow" : "text-white")
                }
              >
                {stat.value}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-3.5 rounded-[18px] border border-brand-yellow/30 bg-brand-yellow/8 p-5 sm:p-7"
        >
          <div className="mb-2.5 font-mono text-[10px] tracking-[2.2px] text-brand-yellow uppercase">
            Registration Open
          </div>
          <p className="mb-4 font-sans text-sm leading-relaxed text-white/85 sm:text-base">
            Registration opens 12 November 2025 at 10am WAT. Secure your
            place now.
          </p>
          <Link
            href={REGISTER_HREF}
            className="flex min-h-13 w-full items-center justify-center rounded-full bg-brand-yellow font-sans text-[15px] font-bold text-brand-teal"
          >
            Register Now
          </Link>
        </Reveal>

        <div className="px-1.5 pt-8 text-center sm:pt-14">
          <Reveal className="mb-2.5 font-mono text-xs tracking-[2.4px] text-brand-yellow uppercase">
            — Race Day Countdown
          </Reveal>
          <Reveal
            delay={0.05}
            className="font-heading mb-4 text-[36px] leading-[0.9] font-black text-white italic uppercase sm:text-5xl"
          >
            The Clock Is Ticking
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {countdownUnits.map((unit, i) => {
              const isLast = i === countdownUnits.length - 1;
              return (
              <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
                <div className="w-[72px] rounded-2xl border border-white/10 bg-white/[0.06] py-3 sm:w-[110px] sm:py-5">
                  <div
                    className={
                      "font-heading text-2xl leading-none font-black sm:text-4xl " +
                      (isLast ? "text-brand-yellow" : "text-white")
                    }
                  >
                    {unit.value}
                  </div>
                  <div
                    className={
                      "mt-1.5 font-mono text-[8px] tracking-wide uppercase sm:text-[10px] " +
                      (isLast ? "text-brand-yellow/70" : "text-gray-500")
                    }
                  >
                    {unit.label}
                  </div>
                </div>
                {i < countdownUnits.length - 1 && (
                  <div className="font-heading hidden self-center text-3xl font-black text-white/35 sm:block">
                    –
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
