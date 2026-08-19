import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";
import type { RouteDetailData } from "../types";

export function RouteEntries({ data }: { data: RouteDetailData }) {
  return (
    <div className="mx-4 mt-6 overflow-hidden rounded-[22px] bg-brand-teal-deep px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-16 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="mb-4 font-mono text-xs tracking-wide text-brand-yellow uppercase">
            The {data.navLabel} EKO170 Lagos Cycle Race
          </div>
          <h2 className="font-heading mb-6 text-5xl leading-[0.95] font-black text-white italic sm:text-6xl">
            Online
            <br />
            Race Entries
          </h2>
          <div className="flex flex-col gap-2.5">
            <div className="font-sans text-[15px] text-white/85">
              <span className="font-semibold text-brand-yellow">Event Date:</span>{" "}
              Sunday, 10 January 2027
            </div>
            <div className="font-sans text-[15px] text-white/85">
              <span className="font-semibold text-brand-yellow">Location:</span>{" "}
              Eko Atlantic City, Lagos
            </div>
            <div className="font-sans text-[15px] text-white/85">
              <span className="font-semibold text-brand-yellow">Race Type:</span> Road
            </div>
            <div className="font-sans text-[15px] text-white/85">
              <span className="font-semibold text-brand-yellow">Distance:</span>{" "}
              {data.distanceKm}
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-2xl border border-white/12 bg-white/[0.06] px-10 py-9"
        >
          <h3 className="font-heading mb-4 text-center text-3xl font-bold text-white">
            Standard
          </h3>
          <div className="border-t border-white/14 py-4.5 text-center font-sans text-base text-white/85">
            {data.price} · Early bird {data.earlyBirdPrice}
          </div>
          <div className="border-t border-white/14 pt-6 text-center">
            <Link
              href={REGISTER_HREF}
              className="inline-flex h-[46px] items-center gap-2 rounded-full bg-brand-yellow px-8 font-sans text-sm font-bold text-brand-teal"
            >
              Enter Now
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
