"use client";

import { useEffect, useRef, useState } from "react";

export function useHideOnScroll(revealThreshold = 90, deltaThreshold = 14) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY.current) < deltaThreshold) return;
      setHidden(y > lastY.current && y > revealThreshold);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealThreshold, deltaThreshold]);

  return { hidden, scrolled };
}
