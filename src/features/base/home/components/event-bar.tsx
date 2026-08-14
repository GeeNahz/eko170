import Link from "next/link";
import { EVENT_CARDS } from "../constants";

export function EventBar() {
  return (
    <div className="mx-4 mt-6 overflow-hidden rounded-[22px] bg-brand-teal px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        {EVENT_CARDS.map((card) => (
          <div
            key={card.id}
            className="flex items-stretch overflow-hidden rounded-[18px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="relative hidden w-[104px] shrink-0 items-center justify-center overflow-hidden bg-brand-green sm:flex">
              <div className="absolute -bottom-8 -left-8 size-[130px] rounded-full border-[14px] border-white/15" />
              <span className="font-heading rotate-180 text-3xl font-black tracking-[2px] text-white uppercase [writing-mode:vertical-rl]">
                Event
              </span>
            </div>
            <div className="grid flex-1 grid-cols-1 items-center sm:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
              <div className="border-b border-brand-cream-border p-6 sm:border-r sm:border-b-0 sm:px-8 sm:py-7">
                <div className="font-heading text-2xl leading-tight font-extrabold text-brand-teal uppercase">
                  {card.title}
                </div>
                <div className="mt-1.5 font-mono text-[13px] tracking-wide text-gray-500">
                  {card.distanceLabel}
                </div>
              </div>
              <div className="border-b border-brand-cream-border p-6 text-center sm:border-r sm:border-b-0 sm:px-8 sm:py-7">
                <div className="font-heading text-[28px] font-extrabold text-brand-teal">
                  {card.dateLabel}
                </div>
                <div className="mt-1.5 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
                  Event Date
                </div>
              </div>
              <div className="flex justify-center border-b border-brand-cream-border p-6 sm:border-r sm:border-b-0 sm:px-8 sm:py-7">
                <Link
                  href={card.resultsHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f1f5f2] px-5.5 py-2.5 font-sans text-sm font-semibold text-brand-teal"
                >
                  Results
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center p-6 sm:px-8 sm:py-7">
                <Link
                  href={card.registerHref}
                  className="inline-flex items-center justify-center rounded-full bg-brand-green px-6.5 py-3 font-sans text-sm font-semibold text-white shadow-[0_8px_22px_rgba(22,163,74,0.3)]"
                >
                  {card.registerLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
