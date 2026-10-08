"use client";

import Link from "next/link";
import type { RegistrationConfig } from "../../lib/types";
import { useGetEventDetails } from "../hooks/use-event";
import { Countdown } from "./countdown";

export function TopBar({ registration }: { registration: RegistrationConfig }) {
  const { data: event } = useGetEventDetails();

  return (
    <div className="fixed inset-x-0 top-0 z-30 flex h-9 items-center bg-[#0b1f25]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-6 sm:px-10">
        <Countdown targetISO={event?.eventDate} />
        <span className="truncate font-mono text-[10px] tracking-wider text-white/55 uppercase">
          {event?.dateLabel ?? "EKO170"}
        </span>

        <Link
          href={registration.href}
          className="hidden rounded-full bg-brand-green px-3 py-1 font-sans text-[10px] font-semibold whitespace-nowrap text-white lg:inline-block"
        >
          {registration.label} →
        </Link>
      </div>
    </div>
  );
}
