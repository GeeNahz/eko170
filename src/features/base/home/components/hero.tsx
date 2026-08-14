"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMagneticHover } from "@/hooks/use-magnetic-hover";
import { REGISTER_HREF } from "../../navigation/constants";
import { useGetEventDetails } from "../../event/hooks/use-event";
import { SplashLoader } from "./splash-loader";

export function Hero() {
  const { data: event } = useGetEventDetails();
  const magnetic = useMagneticHover(0.25);

  return (
    <div className="relative mx-4 mt-4 h-[calc(100vh-32px)] min-h-[760px] overflow-hidden rounded-[22px] bg-[#05080d]">
      <SplashLoader />

      <video
        data-hero-video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="animate-hero-ken-burns absolute inset-0 size-full object-cover"
        style={{ transformOrigin: "60% 45%" }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-[#04080e]/55 via-transparent to-[#04080e]/72" />

      <div
        aria-hidden
        className="animate-slow-spin absolute top-1/2 right-[-6%] size-[min(78vh,760px)] -translate-y-1/2 opacity-[0.16]"
      >
        <svg viewBox="0 0 400 400" className="size-full">
          <circle cx="200" cy="200" r="192" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <circle cx="200" cy="200" r="26" fill="none" stroke="rgba(123,241,168,0.9)" strokeWidth="4" />
          <circle cx="200" cy="200" r="7" fill="rgba(255,255,255,0.8)" />
          <g stroke="rgba(255,255,255,0.55)" strokeWidth="1.4">
            {Array.from({ length: 12 }, (_, i) => i * 15).map((deg) => (
              <g key={deg} transform={`rotate(${deg} 200 200)`}>
                <line x1="200" y1="26" x2="200" y2="374" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col px-6 sm:px-12">
        <div className="flex flex-1 items-center pt-24 pb-24 sm:pt-40 sm:pb-32">
          <div className="max-w-[1000px]">
            <p className="mb-4 font-mono text-xs tracking-[3px] text-brand-yellow uppercase">
              {event?.dateLabel ?? "Eko Atlantic City · Lagos · 10 January 2027"}
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-6 sm:gap-9">
              <p className="font-heading m-0 text-[64px] leading-[0.85] font-black text-white italic sm:text-[90px] lg:text-[120px]">
                EKO<span className="text-brand-green">170</span>
              </p>
              <p className="font-sans text-2xl leading-tight font-extralight text-white italic uppercase sm:text-[33px] sm:leading-[1.35]">
                Lagos&apos; Biggest
                <br />
                <span className="text-yellow-400">Cycling Challenge</span>
              </p>
            </div>
            <p className="mb-10 max-w-[620px] font-sans text-base leading-relaxed text-white/72">
              Experience the Movement. Made in Lagos. 170 kilometres of
              closed roads from Eko Atlantic City through Victoria Island,
              Lekki, and all the way to Epe.
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <motion.div
                style={{ x: magnetic.x, y: magnetic.y }}
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                <Link
                  href={REGISTER_HREF}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-9 py-[18px] font-sans text-base font-semibold text-brand-teal"
                >
                  Register Now
                  <ArrowRight className="size-[17px]" />
                </Link>
              </motion.div>
              <Link
                href="/results"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/85 px-9 py-4 font-sans text-base font-semibold text-white"
              >
                View Challenge Results
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <Link
              href="/about"
              className="font-sans text-base text-white underline decoration-1 underline-offset-4"
            >
              Learn More about Eko170
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-0 flex items-center justify-between bg-linear-to-t from-[#04080e]/45 to-transparent px-0 py-5 sm:inset-x-12">
          <span className="font-mono text-[11px] tracking-[2px] text-white/60 uppercase">
            All Rides Start In Lagos
          </span>
          <div className="flex items-center gap-2">
            <div className="h-[3px] w-7 rounded-full bg-brand-green" />
            <div className="h-[3px] w-3.5 rounded-full bg-white/30" />
            <div className="h-[3px] w-3.5 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[2px] text-white/70 uppercase">
          Scroll
        </span>
        <div className="flex h-[38px] w-6 justify-center rounded-full border-[1.5px] border-white/50 pt-1.5">
          <motion.div
            animate={{ y: [0, 7, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-brand-yellow"
          />
        </div>
      </div>
    </div>
  );
}
