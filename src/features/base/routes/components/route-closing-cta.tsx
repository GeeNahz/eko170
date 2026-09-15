import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";

export function RouteClosingCta() {
  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-linear-120 from-brand-teal via-brand-green to-brand-yellow px-5 py-11 text-center sm:mx-4 sm:py-16">
      <Reveal className="font-heading mb-7 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
        Ready to Ride the Route?
      </Reveal>
      <Reveal delay={0.1}>
        <Link
          href={REGISTER_HREF}
          className="inline-flex w-full max-w-[420px] items-center justify-center rounded-full bg-white px-9 py-4 font-sans text-base font-semibold text-brand-teal"
        >
          Pre-register Now
        </Link>
      </Reveal>
    </div>
  );
}
