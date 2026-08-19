"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 160) {
  const idsKey = ids.join(",");
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const sectionIds = idsKey.split(",");
    const onScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [idsKey, offset]);

  return activeId;
}
