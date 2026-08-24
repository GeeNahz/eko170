import { ArrowRight } from "lucide-react";

// TODO: wire to a real newsletter/subscriber feature (server action) once
// that backend exists — this is presentational only for now.
export function Newsletter() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-linear-120 from-brand-teal via-brand-green to-brand-yellow px-6 py-20 text-center sm:px-10">
      <div className="mb-4 font-mono text-xs tracking-[3px] text-white/75 uppercase">
        Stay Connected
      </div>
      <h2 className="font-heading mb-3 text-4xl leading-[0.95] font-black text-white italic uppercase sm:text-[64px]">
        Stay in the Movement
      </h2>
      <p className="mx-auto mb-7 max-w-[620px] font-sans text-base leading-relaxed text-white/90">
        Route updates, registration news, and event announcements for
        EKO170 — direct to your inbox.
      </p>
      <form className="flex flex-wrap justify-center gap-3">
        <div className="w-full max-w-[480px] rounded-full bg-white px-6 py-4 text-left">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full font-sans text-base text-brand-teal placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full max-w-[480px] items-center justify-center gap-2.5 rounded-full bg-white px-6 py-4 font-sans text-base font-semibold text-brand-teal sm:w-auto sm:max-w-none"
        >
          Subscribe
          <ArrowRight className="size-4" />
        </button>
      </form>
    </div>
  );
}
