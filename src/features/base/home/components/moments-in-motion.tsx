import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Play } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { GALLERY_FEATURED, GALLERY_PREVIEW, GALLERY_TOTAL_PHOTOS } from "../constants";

export function MomentsInMotion() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] border-t border-white/[0.06] bg-[#0b1119] px-6 py-24 sm:px-10">
      <Image
        src="/images/DSC_2480.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-16"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0b1119]/92 to-[#0b1119]/78" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 font-mono text-xs tracking-wide text-brand-yellow uppercase">
            Moments in Motion
          </div>
          <h2 className="font-heading mb-5 text-4xl leading-[0.95] font-black text-white italic uppercase sm:text-[48px]">
            Lagos is the Stage
          </h2>
          <p className="mb-9 font-sans text-lg leading-relaxed text-white/78">
            EKO170 is more than a ride — it&apos;s a celebration of cycling,
            community, and the unstoppable spirit of Lagos. Covering a full
            170 kilometres and a half-ride of 70km, this challenge is
            designed to push limits, showcase the city&apos;s heartbeat, and
            unite riders of all levels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-7.5 py-4 font-sans text-[15px] font-semibold text-white"
            >
              <Camera className="size-4.5" />
              View Gallery
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/85 px-7 py-3.5 font-sans text-[15px] font-semibold text-white"
            >
              Our Story
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/gallery"
            className="group relative block aspect-[16/8] overflow-hidden rounded-[20px] border-8 border-brand-teal shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={GALLERY_FEATURED.src}
              alt={GALLERY_FEATURED.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1119]/50 to-[#0b1119]/5" />
            <div className="absolute top-1/2 left-1/2 flex size-22 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 shadow-[0_12px_40px_rgba(253,199,0,0.4)]">
              <Play className="size-8.5 fill-brand-teal text-brand-teal" />
            </div>
          </Link>
        </Reveal>

        <RevealGroup className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY_PREVIEW.map((photo) => (
            <RevealItem
              key={photo.id}
              className="group relative aspect-4/3 overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3 font-sans text-sm font-semibold text-white"
          >
            View All {GALLERY_TOTAL_PHOTOS} Photos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
