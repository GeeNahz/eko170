import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";

export function RegisterCta() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-linear-120 from-brand-teal via-brand-green to-brand-yellow px-6 py-20 text-center sm:px-10">
      <Reveal className="font-heading mb-6 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
        Think You Can Beat These Times?
      </Reveal>
      <Link
        href={REGISTER_HREF}
        className="inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 font-sans text-base font-semibold text-brand-teal"
      >
        Register for 2027
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
