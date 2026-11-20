"use client";

import { Mail } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";
import { Reveal } from "@/components/motion/reveal";
import { useGetEventDetails } from "../../event/hooks/use-event";

// Reuses the same event-details data SiteFooter already reads from,
// rather than hardcoding a second copy of the contact email.
export function ContactSection() {
  const { data: event } = useGetEventDetails();
  if (!event) return null;

  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-white px-5 py-11 text-center sm:mx-4 sm:px-10 sm:py-20">
      <Reveal className="mb-4 font-mono text-xs tracking-wide text-brand-green uppercase">
        Get in Touch
      </Reveal>
      <Reveal
        delay={0.1}
        className="font-heading mb-8 text-3xl leading-none font-black text-brand-teal uppercase italic sm:text-4xl"
      >
        Questions About EKO170?
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {event.contactEmail && (
          <a
            href={`mailto:${event.contactEmail}`}
            className="flex items-center gap-2 font-sans text-base font-semibold text-brand-green"
          >
            <Mail className="size-4" />
            {event.contactEmail}
          </a>
        )}
        {event.contactTwitter && (
          <span className="flex items-center gap-2 font-sans text-base text-gray-500">
            <IconBrandX className="size-4" />
            {event.contactTwitter}
          </span>
        )}
      </div>
    </div>
  );
}
