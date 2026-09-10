"use client";

import { useCountdown } from "../hooks/use-countdown";

export function Countdown({ targetISO }: { targetISO: string | undefined }) {
  const { days, hours, minutes, seconds } = useCountdown(targetISO);
  const values = [days, hours, minutes, seconds];

  return (
    <div className="flex shrink-0 items-center font-mono text-[11px] font-medium">
      {values.map((value, index) => (
        <span key={index} className="flex items-center">
          <span className="text-brand-yellow">{value}</span>
          {index < values.length - 1 && (
            <span className="px-1 text-white/40">:</span>
          )}
        </span>
      ))}
    </div>
  );
}
