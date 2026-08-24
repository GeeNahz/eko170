import Link from "next/link";
import { EVENT_CARDS } from "../constants";

export function EventBarMobile() {
  return (
    <div className="mx-4 mt-6 overflow-hidden rounded-[22px] bg-brand-teal px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        {EVENT_CARDS.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between gap-4 rounded-[18px] bg-white px-6 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          >
            <div>
              <div className="font-heading text-lg leading-tight font-extrabold text-brand-teal uppercase">
                {card.title}
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
                Event Date · {card.dateLabel}
              </div>
            </div>
            <div className="font-heading shrink-0 text-3xl font-black text-brand-green">
              {card.distanceLabel}
            </div>
          </div>
        ))}

        <div className="flex gap-3">
          {EVENT_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.registerHref}
              className="flex-1 rounded-full bg-brand-green px-4 py-3 text-center font-sans text-sm font-semibold text-white"
            >
              {card.registerLabel}
            </Link>
          ))}
        </div>

        <Link
          href={EVENT_CARDS[0].resultsHref}
          className="text-center font-sans text-sm font-semibold text-white/80 underline underline-offset-4"
        >
          Results
        </Link>
      </div>
    </div>
  );
}
