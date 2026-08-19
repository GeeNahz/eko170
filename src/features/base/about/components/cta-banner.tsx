import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";

export function CtaBanner() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] px-6 py-32 text-center sm:px-10 sm:py-36">
      <Image
        src="/images/CR2A2850.jpg"
        alt="EKO170 riders celebrating"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/75 to-brand-teal-deep/30" />

      <div className="relative">
        <Reveal className="font-heading mx-auto mb-8 max-w-[900px] text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl lg:text-6xl">
          Be Part of History.
          <br />
          Be Part of <span className="text-brand-yellow">EKO170</span>.
        </Reveal>
        <Link
          href={REGISTER_HREF}
          className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-10 py-4 font-sans text-base font-semibold text-white shadow-[0_8px_24px_rgba(22,163,74,0.35)]"
        >
          Enter Race!
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
