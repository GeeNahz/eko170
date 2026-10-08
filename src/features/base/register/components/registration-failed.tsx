import Link from "next/link";
import { X } from "lucide-react";

export function RegistrationFailed() {
  return (
    <div className="rounded-[20px] border border-brand-cream-border bg-white px-6 py-16 text-center sm:px-10">
      <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-red-50">
        <X className="size-9.5 text-red-600" strokeWidth={2.4} />
      </div>
      <h2 className="font-heading mb-4 text-4xl font-extrabold text-brand-teal uppercase">
        Payment Not Completed
      </h2>
      <p className="mx-auto mb-8 max-w-[480px] font-sans text-base leading-relaxed text-gray-500">
        We couldn&apos;t confirm your payment, so your registration wasn&apos;t
        recorded. No charge was taken if you cancelled — if you believe
        you were charged, email{" "}
        <a href="mailto:info@eko170.com" className="text-brand-green">
          info@eko170.com
        </a>{" "}
        with your details.
      </p>
      <Link
        href="/register"
        className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-7 py-3.5 font-sans text-sm font-semibold text-white"
      >
        Try Again
      </Link>
    </div>
  );
}
