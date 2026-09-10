import Link from "next/link";
import { Check } from "lucide-react";

export function VolunteerSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-[20px] border border-brand-cream-border bg-white px-6 py-16 text-center sm:px-10">
      <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-brand-cream">
        <Check className="size-9.5 text-brand-green" strokeWidth={2.4} />
      </div>
      <h2 className="font-heading mb-4 text-4xl font-extrabold text-brand-teal uppercase">
        Welcome, Crew!
      </h2>
      <p className="mx-auto mb-8 max-w-[480px] font-sans text-base leading-relaxed text-gray-500">
        We&apos;ve got your details. The volunteer team will email your
        role, briefing time and kit pickup by December.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-7 py-3.5 font-sans text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-6.5 py-3 font-sans text-sm font-semibold text-brand-green"
        >
          Sign Up Someone Else
        </button>
      </div>
    </div>
  );
}
