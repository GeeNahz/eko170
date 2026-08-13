import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavLink } from "../types";

export function MobileNav({
  links,
  registerHref,
}: {
  links: NavLink[];
  registerHref: string;
}) {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>
            EKO<span className="text-brand-green">170</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 overflow-y-auto px-4">
          {links.map((link) => (
            <div key={link.id}>
              <SheetClose
                render={
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 font-sans text-base font-medium text-gray-700"
                  />
                }
              >
                {link.label}
              </SheetClose>
              {link.children && (
                <div className="ml-3 flex flex-col gap-1 border-l border-brand-cream-border pl-3">
                  {link.children.map((child) => (
                    <SheetClose
                      key={child.id}
                      render={
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 font-sans text-sm text-gray-600"
                        />
                      }
                    >
                      {child.label}
                    </SheetClose>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <SheetClose
            render={
              <Link
                href={registerHref}
                className="flex h-12 w-full items-center justify-center rounded-full bg-linear-100 from-brand-teal via-brand-green to-brand-yellow font-sans text-sm font-semibold text-white"
              />
            }
          >
            Register Now
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
