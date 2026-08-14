import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function FeatureRoute() {
  return (
    <div className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
            The Route
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
            170 Kilometres
            <br />
            of Raw Lagos
          </h2>
          <p className="mb-8 max-w-[480px] font-sans text-base leading-relaxed text-gray-500">
            No cars. No okadas. No chaos. From Eko Atlantic City through
            Victoria Island, across the Lekki-Ikoyi Bridge, along the
            Lekki-Epe Expressway, and into Epe — 170 kilometres of Lagos&apos;s
            most iconic roads, completely closed for riders.
          </p>
          <Link
            href="/routes"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
          >
            View the Route
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/CR2A2877.jpg"
              alt="The Route"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute right-[-12px] bottom-[-20px] rounded-2xl bg-brand-green px-6 py-4">
            <div className="font-heading text-3xl leading-none font-black text-white">2,000+</div>
            <div className="mt-1 font-mono text-[10px] tracking-wide text-white/85 uppercase">
              Expected Riders
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function FeatureCommunity() {
  return (
    <div id="riders" className="bg-brand-cream px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-2 aspect-4/3 overflow-hidden rounded-2xl lg:order-1">
          <div className="group relative size-full">
            <Image
              src="/images/DSC_2129.jpg"
              alt="The Community"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
            The Community
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
            Thousands
            <br />
            of Riders. One City.
          </h2>
          <p className="mb-8 max-w-[480px] font-sans text-base leading-relaxed text-gray-500">
            Join cyclists from Lagos, Abuja, London, New York, and beyond.
            EKO170 is more than a ride — it is a movement. Riders, residents,
            and volunteers united by 170 kilometres and one city.
          </p>
          <Link
            href="/community"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
          >
            Learn About the Event
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
