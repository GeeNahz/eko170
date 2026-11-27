import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export function PartnersFooterCredit() {
  return (
    <Reveal className="mx-3 mt-4 flex flex-col items-center gap-4 overflow-hidden rounded-[22px] bg-brand-teal-deep px-5 py-7 text-center sm:mx-4 sm:flex-row sm:justify-between sm:px-10 sm:text-left">
      <p className="font-sans text-sm text-white/80">
        Organised by Dynastar Sports &amp; Education Foundation
      </p>
      <Link
        href="/partners/apply"
        className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand-yellow px-6 py-3 font-sans text-sm font-semibold text-brand-teal-deep"
      >
        Partner with EKO170
        <ArrowRight className="size-4" />
      </Link>
    </Reveal>
  );
}
