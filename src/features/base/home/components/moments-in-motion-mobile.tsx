import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Play } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GALLERY_FEATURED, GALLERY_PREVIEW, GALLERY_TOTAL_PHOTOS } from "../constants";

export function MomentsInMotionMobile() {
  return (
    <div className="relative overflow-hidden border-t border-white/[0.06] bg-[#0b1119] pt-11 pb-12">
      <Image
        src="/images/DSC_2480.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-16"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0b1119]/92 to-[#0b1119]/78" />

      <div className="relative px-5">
        <Reveal className="mb-9 text-center">
          <div className="mb-4 font-mono text-xs tracking-wide text-brand-yellow uppercase">
            Moments in Motion
          </div>
          <h2 className="font-heading mb-5 text-4xl leading-[0.95] font-black text-white italic uppercase">
            Lagos is the Stage
          </h2>
          <p className="font-sans text-base leading-relaxed text-white/78">
            EKO170 is more than a ride — it&apos;s a celebration of cycling,
            community, and the unstoppable spirit of Lagos. Covering a full
            170 kilometres and a half-ride of 70km, this challenge is
            designed to push limits, showcase the city&apos;s heartbeat, and
            unite riders of all levels.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/gallery"
            className="group relative block aspect-[16/10] overflow-hidden rounded-[20px] border-4 border-brand-teal shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={GALLERY_FEATURED.src}
              alt={GALLERY_FEATURED.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1119]/50 to-[#0b1119]/5" />
            <div className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 shadow-[0_12px_40px_rgba(253,199,0,0.4)]">
              <Play className="size-6 fill-brand-teal text-brand-teal" />
            </div>
          </Link>
        </Reveal>

        <div className="mt-7 mb-9 flex flex-col items-center gap-3">
          <Link
            href="/gallery"
            className="inline-flex w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full bg-brand-green px-7.5 py-4 font-sans text-[15px] font-semibold text-white"
          >
            <Camera className="size-4.5" />
            View Gallery
          </Link>
          <Link
            href="/about"
            className="inline-flex w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full border-2 border-white/85 px-7 py-3.5 font-sans text-[15px] font-semibold text-white"
          >
            Our Story
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2">
          {GALLERY_PREVIEW.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-4/3 w-[170px] shrink-0 snap-start overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
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
