import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";
import type { RouteDetailData } from "../types";

export function RouteIntroduction({ data }: { data: RouteDetailData }) {
  return (
    <div
      id="introduction"
      className="mx-4 mt-4 scroll-mt-[170px] overflow-hidden rounded-[22px] bg-brand-teal-deep px-6 py-24 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-[840px] text-center">
        <Reveal className="mb-4 font-mono text-xs tracking-[2px] text-white/60 uppercase">
          Welcome
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-4 text-4xl leading-[0.95] font-black text-white uppercase sm:text-5xl"
        >
          {data.introHeading}
        </Reveal>
        <Reveal
          delay={0.15}
          className="font-heading mb-6 text-2xl font-semibold tracking-wide text-brand-yellow"
        >
          {data.introEyebrow}
        </Reveal>
        <Reveal
          delay={0.2}
          className="mb-10 font-sans text-base leading-relaxed text-white/78"
        >
          {data.introBody}
        </Reveal>
        <Link
          href={REGISTER_HREF}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-yellow px-9 font-sans text-sm font-bold text-brand-teal"
        >
          Enter Now
        </Link>
      </div>
    </div>
  );
}
