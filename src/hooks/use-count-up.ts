"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function parseValue(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

export function useCountUp(value: string, duration = 1400) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(() => `0${parseValue(value).suffix}`);

  useEffect(() => {
    if (!inView) return;
    const { target, suffix } = parseValue(value);
    const t0 = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased).toLocaleString("en-US") + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return { ref, display };
}
