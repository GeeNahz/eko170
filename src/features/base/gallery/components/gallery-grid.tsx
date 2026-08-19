"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { GalleryPhoto } from "../../lib/types";
import { GALLERY_CATEGORIES } from "../constants";
import { Lightbox } from "./lightbox";

export function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-14 px-6 pb-20 sm:px-10">
      {GALLERY_CATEGORIES.map((category) => (
        <div key={category.id}>
          <Reveal className="mb-5 flex items-baseline gap-3.5 border-l-4 border-brand-green pl-3.5">
            <span className="font-heading text-3xl font-black text-brand-teal uppercase italic">
              {category.title}
            </span>
            <span className="font-mono text-xs tracking-wide text-gray-400 uppercase">
              {category.photos.length} photos
            </span>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {category.photos.map((photo) => (
              <RevealItem
                key={photo.id}
                onClick={() => setSelected(photo)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-green/28 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      ))}

      <Lightbox photo={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
