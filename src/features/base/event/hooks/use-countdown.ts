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
  // The countdown value is stored in state and recomputed inside the
  // interval callback (never synchronously in the effect body, so this
  // stays clear of react-hooks/set-state-in-effect). Deriving it fresh
  // from Date.now() during render instead would read as a pure expression
  // of `targetISO` alone to the React Compiler's auto-memoization, which
  // would then cache it and never see it change — freezing the display.
  const [value, setValue] = useState<CountdownValue>(() =>
    targetISO ? computeCountdown(targetISO) : ZERO,
  );

  useEffect(() => {
    if (!targetISO) return;
    const id = setInterval(() => setValue(computeCountdown(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return targetISO ? value : ZERO;
}
