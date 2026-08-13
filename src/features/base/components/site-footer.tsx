"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { useGetEventDetails } from "../event/hooks/use-event";
import { FOOTER_NAV } from "../navigation/constants";

const SOCIAL_ICONS = {
  instagram: IconBrandInstagram,
  twitter: IconBrandX,
  facebook: IconBrandFacebook,
} as const;

export function SiteFooter() {
  const { data: event } = useGetEventDetails();

  return (
    <footer className="mx-4 mb-4 overflow-hidden rounded-[22px] bg-brand-teal px-6 pt-16 pb-10 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3.5">
              <span className="flex h-11 w-13 items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src="/eko170-logo.jpg"
                  alt=""
                  width={46}
                  height={37}
                  className="h-9 w-11 object-cover"
                />
              </span>
              <div>
                <div className="font-heading text-xl leading-none font-black text-white">
                  EKO170
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-wider text-gray-500 uppercase">
                  Lagos&apos; Biggest Cycling Challenge
                </div>
              </div>
            </div>
            <p className="mb-6 max-w-sm font-sans text-base leading-relaxed text-gray-400">
              Experience the Movement. Made in Lagos. 170km of iconic closed
              roads from Eko Atlantic City to Epe and back.
            </p>
            <div className="flex gap-3">
              {event?.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.platform];
                return (
                  <Link
                    key={social.id}
                    href={social.href}
                    aria-label={social.platform}
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {FOOTER_NAV.map((group) => (
            <div key={group.id}>
              <div className="mb-5 font-sans text-base font-bold text-white">
                {group.title}
              </div>
              <div className="flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="font-sans text-base text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="font-mono text-xs tracking-wide text-gray-500">
            © {new Date().getFullYear()} EKO170. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            {event?.contactEmail && (
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 text-gray-500" />
                <span className="font-mono text-xs text-gray-400">
                  {event.contactEmail}
                </span>
              </div>
            )}
            {event?.contactTwitter && (
              <div className="flex items-center gap-2">
                <IconBrandX className="size-3.5 text-gray-500" />
                <span className="font-mono text-xs text-gray-400">
                  {event.contactTwitter}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
