import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";

export function CommunityCta() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-linear-120 from-brand-teal via-brand-green to-brand-yellow px-6 py-24 text-center sm:px-10">
      <Reveal className="font-heading mb-3.5 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
        Get Involved
      </Reveal>
      <Reveal
        delay={0.1}
        className="mx-auto mb-7 max-w-[520px] font-sans text-base text-white/85"
      >
        Ride it, marshal it, or fundraise for it — every role builds the
        movement.
      </Reveal>
      <Link
        href={REGISTER_HREF}
        className="inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 font-sans text-base font-semibold text-brand-teal"
      >
        Volunteer or Ride
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
