import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <SheetContent
        side="right"
        className="w-full gap-0 border-none bg-brand-teal-deep p-0 text-white sm:max-w-xs"
      >
        <SheetHeader className="p-4">
          <SheetTitle className="font-heading text-xl font-black text-white">
            EKO<span className="text-brand-green">170</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col overflow-y-auto px-4">
          {links.map((link) =>
            link.children ? (
              <Accordion key={link.id} className="border-b border-white/10">
                <AccordionItem className="border-none">
                  <AccordionTrigger className="rounded-none py-4 font-heading text-lg font-bold tracking-wide text-white uppercase hover:no-underline **:data-[slot=accordion-trigger-icon]:text-brand-yellow">
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 border-l border-white/15 pl-4">
                      {link.children.map((child) => (
                        <SheetClose
                          key={child.id}
                          nativeButton={false}
                          render={
                            <Link
                              href={child.href}
                              className="block rounded-lg py-2 font-sans text-sm text-gray-300"
                            />
                          }
                        >
                          {child.label}
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <SheetClose
                key={link.id}
                nativeButton={false}
                render={
                  <Link
                    href={link.href}
                    className="block border-b border-white/10 py-4 font-heading text-lg font-bold tracking-wide text-white uppercase"
                  />
                }
              >
                {link.label}
              </SheetClose>
            ),
          )}
        </nav>
        <div className="p-4">
          <SheetClose
            nativeButton={false}
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
