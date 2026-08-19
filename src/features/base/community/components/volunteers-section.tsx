import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";

export function VolunteersSection() {
  return (
    <div
      id="volunteers"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-white px-6 py-24 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/sm-DSC_1708.jpg"
            alt="Volunteers"
            fill
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
            Join the Crew
          </div>
          <h2 className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            Volunteers
          </h2>
          <p className="mb-6 font-sans text-lg leading-relaxed text-gray-700">
            Hundreds of volunteers make EKO170 possible — marshalling
            corners, running feed zones and hanging medals. Join the crew
            and experience the event from the inside, with kit, meals and
            a front-row seat to the day.
          </p>
          <Link
            href={REGISTER_HREF}
            className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-7.5 py-3.5 font-sans text-[15px] font-semibold text-white"
          >
            Volunteer With Us
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
