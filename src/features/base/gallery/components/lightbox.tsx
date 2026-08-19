"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { GalleryPhoto } from "../../lib/types";

export function Lightbox({
  photo,
  onClose,
}: {
  photo: GalleryPhoto | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-[#040a07]/92 p-10"
        >
          {/* next/image's `fill` needs a pre-sized parent; the lightbox
              wants the opposite — a viewport-capped box that keeps the
              photo's own aspect ratio — so a plain <img> is the simpler
              fit here. */}
          <motion.img
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            src={photo.src}
            alt={photo.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-lg shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
          />
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-6 right-7 flex size-13 items-center justify-center rounded-full bg-white/14"
          >
            <X className="size-6 text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
