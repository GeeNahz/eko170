import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { HOST_CYCLING_CLUBS } from "../constants";

export function PartnersHostClubs() {
  return (
    <div className="mx-3 mt-10 sm:mx-4 sm:mt-14">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-6">
        <Reveal className="font-heading mb-2 text-2xl font-extrabold text-brand-teal uppercase sm:text-3xl">
          Lagos Host Cycling Clubs
        </Reveal>
        <Reveal
          delay={0.05}
          className="mb-6 font-sans text-sm text-gray-500"
        >
          Our Lagos host cycling clubs for EKO170 2027.
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col items-center gap-6 rounded-2xl border border-brand-cream-border bg-white p-4 sm:flex-row sm:justify-center sm:gap-10 sm:p-5"
        >
          {HOST_CYCLING_CLUBS.map((club, index) => (
            <div key={club.id} className="flex items-center gap-10 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-cream-border bg-white p-0">
                  <Image
                    src={club.src}
                    alt={club.name}
                    width={56}
                    height={56}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-sans text-base font-semibold text-brand-teal">
                  {club.name}
                </span>
              </div>
              {index === 0 && (
                <div className="hidden h-10 w-px bg-brand-cream-border sm:block" />
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
