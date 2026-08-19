import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function PartnersCta() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-linear-120 from-brand-teal via-brand-green to-brand-yellow px-6 py-24 text-center sm:px-10">
      <Reveal className="font-heading mb-3.5 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
        Partner With EKO170
      </Reveal>
      <Reveal
        delay={0.1}
        className="mx-auto mb-7 max-w-[520px] font-sans text-base text-white/85"
      >
        Let&apos;s put your brand at the heart of Lagos&apos; biggest ride.
        Packages available across every tier.
      </Reveal>
      <a
        href="mailto:partners@eko170.com"
        className="inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 font-sans text-base font-semibold text-brand-teal"
      >
        Become a Partner
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
