"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useGetResultsInfo } from "../hooks/use-results";

export function ResultsCta() {
  const { data } = useGetResultsInfo();

  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-brand-teal-deep px-5 pt-11 pb-12 text-center sm:mx-4 sm:px-10 sm:py-20">
      <Reveal className="font-heading mb-4 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
        Full Results on FinishTime
      </Reveal>
      <Reveal
        delay={0.1}
        className="mx-auto mb-9 max-w-[560px] font-sans text-base leading-relaxed text-white/72"
      >
        EKO170&apos;s official timing partner publishes every finisher,
        split, and category placing on their own platform — that&apos;s
        the source of truth, not a copy hosted here.
      </Reveal>
      <a
        href={data?.resultsUrl ?? "https://www.finishtime.co.za/"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-full bg-brand-yellow px-9 py-4 font-sans text-base font-semibold text-brand-teal"
      >
        View Official Results on FinishTime
        <ArrowUpRight className="size-4" />
      </a>
    </div>
  );
}
