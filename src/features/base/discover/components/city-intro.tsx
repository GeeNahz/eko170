import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function CityIntro() {
  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-white px-5 pt-10 pb-11 sm:mx-4 sm:px-10 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
            The City
          </div>
          <h2 className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            Where the Ride Comes Alive
          </h2>
          <p className="mb-5 font-sans text-lg leading-relaxed text-gray-700">
            Lagos is loud, fast and impossibly alive — 20 million people,
            an Atlantic coastline, and an energy you feel the moment you
            land. EKO170 rolls through its newest icon, Eko Atlantic City,
            then hands the weekend back to the city.
          </p>
          <p className="font-sans text-lg leading-relaxed text-gray-700">
            Come for the ride, stay for the beaches, the art, the food and
            the nightlife. Here&apos;s how to make the most of it.
          </p>
        </Reveal>
        <Reveal
          delay={0.1}
          className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl lg:block"
        >
          <Image
            src="/images/sm-DSC_2320.jpg"
            alt="Lagos waterfront"
            fill
            className="object-cover"
          />
        </Reveal>
      </div>
    </div>
  );
}
