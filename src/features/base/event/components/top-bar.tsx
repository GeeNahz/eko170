"use client";

import Link from "next/link";
import { REGISTER_HREF } from "../../navigation/constants";
import { useGetEventDetails } from "../hooks/use-event";
import { Countdown } from "./countdown";

export function TopBar() {
  const { data: event } = useGetEventDetails();

  return (
    <div className="fixed inset-x-0 top-0 z-30 flex h-9 items-center bg-linear-100 from-brand-teal via-brand-green to-brand-yellow">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-10">
        <span className="hidden truncate font-mono text-[11px] tracking-wider text-brand-cream uppercase sm:inline">
          {event?.dateLabel ?? "EKO170"}
        </span>

        <div className="ml-auto flex items-center gap-4">
          <Countdown targetISO={event?.eventDate} />
          <Link
            href={REGISTER_HREF}
            className="rounded-full bg-brand-green px-3 py-1 font-sans text-[10px] font-semibold whitespace-nowrap text-white"
          >
            Register →
          </Link>
        </div>
      </div>
    </div>
  );
}
