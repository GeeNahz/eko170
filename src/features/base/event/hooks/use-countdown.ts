"use client";

import { useEffect, useState } from "react";
import type { CountdownValue } from "../types";

const ZERO: CountdownValue = { days: "00", hours: "00", minutes: "00", seconds: "00" };

function pad(value: number) {
  return String(Math.max(value, 0)).padStart(2, "0");
}

function computeCountdown(targetISO: string): CountdownValue {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

export function useCountdown(targetISO: string | undefined): CountdownValue {
  // Ticks a counter every second to force a re-render; the countdown value
  // itself is derived fresh from Date.now() during render rather than
  // synced into state, so the effect never calls setState synchronously
  // in its body — only inside the interval's callback.
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!targetISO) return;
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return targetISO ? computeCountdown(targetISO) : ZERO;
}
