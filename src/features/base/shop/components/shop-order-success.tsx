import Link from "next/link";
import { Check } from "lucide-react";

export function ShopOrderSuccess({
  data,
}: {
  data: { name: string; email: string; refCode: string; items: string };
}) {
  return (
    <div className="rounded-[20px] border border-brand-cream-border bg-white px-6 py-16 text-center sm:px-10">
      <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-brand-cream">
        <Check className="size-9.5 text-brand-green" strokeWidth={2.4} />
      </div>
      <h2 className="font-heading mb-4 text-4xl font-extrabold text-brand-teal uppercase">
        Order Confirmed
      </h2>
      <p className="mx-auto mb-2 max-w-[480px] font-sans text-base leading-relaxed text-gray-500">
        Thanks, {data.name || "Rider"} — your payment is confirmed. A
        confirmation has been sent to {data.email}.
      </p>
      <p className="mx-auto mb-2 max-w-[480px] font-sans text-sm leading-relaxed text-gray-500">
        {data.items}
      </p>
      <p className="mt-5 mb-8 font-mono text-xs tracking-wide text-gray-400 uppercase">
        Reference · {data.refCode}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-7 py-3.5 font-sans text-sm font-semibold text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
