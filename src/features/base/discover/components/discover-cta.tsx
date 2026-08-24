import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";

export function DiscoverCta() {
  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-linear-120 from-brand-teal via-brand-green to-brand-yellow px-5 pt-11 pb-12 text-center sm:mx-4 sm:px-10 sm:py-24">
      <Reveal className="font-heading mb-6 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
        Make It a Lagos Weekend
      </Reveal>
      <Reveal
        delay={0.1}
        className="mx-auto mb-7 max-w-[520px] font-sans text-base text-white/85"
      >
        Secure your place on the start line, then let the city do the
        rest.
      </Reveal>
      <Link
        href={REGISTER_HREF}
        className="inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 font-sans text-base font-semibold text-brand-teal"
      >
        Plan Your Visit
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
