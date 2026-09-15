import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REGISTER_HREF } from "../../navigation/constants";

export function RegistrationBanner() {
  return (
    <div className="bg-brand-green px-6 py-7 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <div>
          <div className="mb-1.5 font-mono text-[11px] tracking-wide text-white/80 uppercase">
            Registration Opens 30 September 2026
          </div>
          <div className="font-sans text-lg font-semibold text-white">
            Registration opens 30 September 2026. Pre-register now to vote
            for a route and receive updates about the event.
          </div>
        </div>
        <Link
          href={REGISTER_HREF}
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-4 font-sans text-sm font-semibold text-brand-teal"
        >
          Pre-register Now
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
