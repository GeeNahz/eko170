"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { REGISTER_HREF } from "../../navigation/constants";
import { ROUTE_SUBNAV_LINKS } from "../constants";
import { useScrollSpy } from "../hooks/use-scroll-spy";

export function RouteSubNav({ navLabel }: { navLabel: string }) {
  const ids = ROUTE_SUBNAV_LINKS.map((link) => link.id);
  const activeId = useScrollSpy(ids);

  return (
    <div className="sticky top-24 z-20 mx-4 -mt-9 flex justify-center sm:mx-10">
      <div className="flex w-full max-w-[1240px] items-center gap-0.5 overflow-x-auto rounded-2xl border border-brand-teal/10 bg-white/95 p-1 shadow-[0_16px_44px_rgba(15,58,68,0.16)] backdrop-blur-md">
        <a
          href="#top"
          className="rounded-xl bg-brand-yellow px-5 py-3 font-sans text-sm font-bold whitespace-nowrap text-brand-teal"
        >
          {navLabel}
        </a>
        {ROUTE_SUBNAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={cn(
              "rounded-xl px-4 py-3 font-sans text-[13px] whitespace-nowrap text-gray-700",
              activeId === link.id && "bg-green-50 text-brand-green",
            )}
          >
            {link.label}
          </a>
        ))}
        <Link
          href={REGISTER_HREF}
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 font-sans text-[13px] font-bold whitespace-nowrap text-white"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}
