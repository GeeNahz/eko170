"use client";

import Image from "next/image";
import { Bike } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Preparing the ride...",
  "Loading the route...",
  "Getting the peloton ready...",
  "Almost ready...",
  "See you at the starting line...",
];

const CIRCUMFERENCE = 377; // 2 * PI * 60
const MIN_DISPLAY_MS = 1800;
const FALLBACK_MS = 7000;

export function SplashLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, 1400);

    const video = document.querySelector<HTMLVideoElement>("[data-hero-video]");
    const assets: Promise<void>[] = [
      new Promise<void>((resolve) => {
        if (!video || video.readyState >= 3) return resolve();
        const done = () => resolve();
        video.addEventListener("canplaythrough", done, { once: true });
        video.addEventListener("canplay", done, { once: true });
        setTimeout(resolve, 4000);
      }),
    ];
    if (document.fonts?.ready) assets.push(document.fonts.ready.then(() => {}));

    let loaded = 0;
    const total = assets.length;
    assets.forEach((p) => p.then(() => { loaded += 1; }));

    const t0 = performance.now();
    let raf = 0;
    let shown = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      clearInterval(msgTimer);
      clearTimeout(fallback);
      setProgress(1);
      setTimeout(() => setVisible(false), 380);
    };

    const tick = () => {
      const elapsed = performance.now() - t0;
      const timeCap = Math.min(elapsed / MIN_DISPLAY_MS, 1);
      const target = Math.min(loaded / total, timeCap);
      shown += (target - shown) * 0.12;
      setProgress(shown);

      if (loaded >= total && elapsed >= MIN_DISPLAY_MS && shown > 0.985) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const fallback = setTimeout(() => {
      cancelAnimationFrame(raf);
      finish();
    }, FALLBACK_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(msgTimer);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-splash-loader
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#04140c]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative flex h-24 items-center justify-center rounded-full bg-white px-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <Image
                src="/eko170-logo.jpg"
                alt="EKO170"
                width={100}
                height={70}
                className="h-[70px] w-auto object-contain"
                priority
              />
            </div>
            <div className="relative flex size-[132px] items-center justify-center">
              <svg width="132" height="132" viewBox="0 0 132 132" className="absolute inset-0 -rotate-90">
                <circle cx="66" cy="66" r="60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
                <circle
                  cx="66"
                  cy="66"
                  r="60"
                  fill="none"
                  stroke="#2f9e44"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
                  style={{ transition: "stroke-dashoffset 400ms cubic-bezier(.16,1,.3,1)" }}
                />
              </svg>
              <Bike className="size-11 animate-pulse text-white" />
            </div>
            <p className="min-h-4 font-mono text-xs tracking-[2.5px] text-green-100/85 uppercase">
              {MESSAGES[messageIndex]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
