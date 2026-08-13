"use client";

import { useCountdown } from "../hooks/use-countdown";

export function Countdown({ targetISO }: { targetISO: string | undefined }) {
  const { days, hours, minutes, seconds } = useCountdown(targetISO);
  const units = [
    { label: "D", value: days },
    { label: "H", value: hours },
    { label: "M", value: minutes },
    { label: "S", value: seconds },
  ];

  return (
    <div className="flex items-center gap-1">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex items-center gap-0.5">
            <span className="font-mono text-xs font-medium text-white">{unit.value}</span>
            <span className="font-mono text-[9px] text-brand-yellow">{unit.label}</span>
          </div>
          {index < units.length - 1 && (
            <span className="w-2.5 px-0.5 text-center font-mono text-[10px] text-green-500">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
