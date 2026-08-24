"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useMagneticHover } from "@/hooks/use-magnetic-hover";
import { PRIMARY_NAV, REGISTER_HREF } from "../constants";
import { useHideOnScroll } from "../hooks/use-hide-on-scroll";
import { MobileNav } from "./mobile-nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function NavBar() {
  const pathname = usePathname();
  const { hidden, scrolled } = useHideOnScroll();
  const magnetic = useMagneticHover(0.3);

  return (
    <motion.div
      className="fixed inset-x-0 top-9 z-30 border-b border-brand-cream-border bg-white"
      animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.42, ease: [0.65, 0, 0.35, 1] }}
      style={{ boxShadow: scrolled ? "0 12px 40px rgba(15,58,68,0.12)" : "none" }}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-6 px-6 sm:px-10">
        <Link
          href="/"
          className="flex h-[60px] shrink-0 items-center gap-2.5 rounded-full border border-white/60 bg-white/70 py-0 pr-3.5 pl-1.5 shadow-[0_6px_20px_rgba(16,24,40,0.08)] backdrop-blur-md"
        >
          <span className="flex size-[52px] items-center justify-center overflow-hidden rounded-full border border-brand-cream-border bg-white">
            <Image
              src="/eko170-logo.jpg"
              alt="EKO170"
              width={44}
              height={44}
              className="size-11 object-contain"
            />
          </span>
          <span className="font-heading text-2xl leading-none font-black tracking-wide text-brand-teal">
            EKO<span className="text-brand-green">170</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 rounded-full border border-white/60 bg-[rgba(241,245,242,0.62)] px-2.5 py-0 shadow-[0_6px_20px_rgba(16,24,40,0.05)] backdrop-blur-md lg:flex">
          {PRIMARY_NAV.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <div key={link.id} className="group relative flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2.5 py-2 font-sans text-[13px] font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green/10 hover:text-brand-green",
                    active ? "bg-brand-green/10 text-brand-green" : "text-gray-700",
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="size-3.5 opacity-55 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.children && (
                  <div className="invisible absolute top-full left-1/2 z-40 mt-3.5 min-w-52 -translate-x-1/2 translate-y-2 rounded-2xl border border-black/5 bg-white/95 p-2.5 opacity-0 shadow-[0_20px_50px_rgba(16,24,40,0.16)] backdrop-blur-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="block rounded-lg px-3.5 py-2 font-sans text-sm font-medium text-gray-700 transition-colors hover:bg-brand-green/10 hover:text-brand-green"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          style={{ x: magnetic.x, y: magnetic.y }}
          onMouseMove={magnetic.onMouseMove}
          onMouseLeave={magnetic.onMouseLeave}
          className="hidden shrink-0 lg:block"
        >
          <Link
            href={REGISTER_HREF}
            className="inline-flex h-[60px] items-center justify-center gap-2.5 rounded-full border border-white/60 bg-linear-100 from-brand-teal via-brand-green to-brand-yellow px-6 font-sans text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(22,163,74,0.28)]"
          >
            Register Now
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link
            href={REGISTER_HREF}
            className="inline-flex h-10 items-center justify-center rounded-full bg-linear-100 from-brand-teal via-brand-green to-brand-yellow px-4 font-sans text-sm font-semibold whitespace-nowrap text-white shadow-[0_8px_24px_rgba(22,163,74,0.28)]"
          >
            Register Now
          </Link>
          <MobileNav links={PRIMARY_NAV} registerHref={REGISTER_HREF} />
        </div>
      </div>
    </motion.div>
  );
}
