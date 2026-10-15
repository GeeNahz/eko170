"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import type { RegistrationConfig } from "../../lib/types";
import { useCountdown } from "../../event/hooks/use-countdown";
import { useGetEventDetails } from "../../event/hooks/use-event";
// Replaces EventBar + DistanceBar + RegistrationBanner + CountdownSection
// (desktop) / EventGroupMobile (mobile) for the revamped Home only — the
// new mockup merges the countdown and registration CTA into one block
// (id="register"), a real structural difference from how those four
// components are still built (and still used, unchanged, by HomeCurrent).
// Single responsive component rather than a mobile/desktop split since
// nothing here needs a different element order at `lg:`.
export function EventCardSection({ registration }: { registration: RegistrationConfig }) {
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
        <div className="px-1.5 text-center">
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

        <Reveal
          delay={0.15}
          className="mt-8 rounded-[18px] border border-brand-yellow/30 bg-brand-yellow/8 p-5 sm:mt-10 sm:p-7"
        >
          <div className="mb-2.5 font-mono text-[10px] tracking-[2.2px] text-brand-yellow uppercase">
            {registration.isOpen ? "Registration Open" : `Registration Opens ${registration.opensAtLabel}`}
          </div>
          <p className="mb-4 font-sans text-sm leading-relaxed text-white/85 sm:text-base">
            {registration.isOpen
              ? "Registration is open — secure your place now."
              : `Registration opens ${registration.opensAtLabel}. Pre-register now to vote for a route and receive updates about the event.`}
          </p>
          <Link
            href={registration.href}
            className="flex min-h-13 w-full items-center justify-center rounded-full bg-brand-yellow font-sans text-[15px] font-bold text-brand-teal"
          >
            {registration.label}
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
