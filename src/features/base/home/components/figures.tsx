"use client";

import { Award, Bike, Clock, Globe, Trophy, Users } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { FIGURES } from "../constants";

const ICONS = [Bike, Users, Award, Trophy, Clock, Globe];

function Stat({ value, label, Icon }: { value: string; label: string; Icon: typeof Bike }) {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="px-3 py-8">
      <Icon className="mx-auto mb-3 size-7 text-brand-green" />
      <div className="font-heading text-4xl leading-none font-black text-white">{display}</div>
      <div className="mt-2 font-mono text-[10px] tracking-wide text-gray-500 uppercase">
        {label}
      </div>
    </div>
  );
}

export function Figures() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-teal px-6 py-24 text-center sm:px-10">
      <div className="mb-4 font-mono text-xs tracking-wide text-brand-yellow uppercase">
        By the Numbers
      </div>
      <h2 className="font-heading mb-12 text-4xl leading-[0.95] font-black text-white italic uppercase sm:text-[64px]">
        EKO170 in Figures
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/[0.08] overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
        {FIGURES.map((figure, i) => (
          <Stat key={figure.id} value={figure.value} label={figure.label} Icon={ICONS[i]} />
        ))}
      </div>
    </div>
  );
}
