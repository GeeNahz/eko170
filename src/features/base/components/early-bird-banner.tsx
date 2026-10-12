import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { DISTANCE_OPTIONS, DISTANCE_PRICES } from "../register/constants";

// Flat pricing — every distance shares the same early-bird window, so
// this reads it off either option rather than needing a selected one.
// Shared by the registration form and Home's hero — see
// registration-form.tsx for the original, this is that banner lifted
// out so both stay in sync.
export function EarlyBirdBanner({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const earlyBird = DISTANCE_PRICES[DISTANCE_OPTIONS[0]].earlyBird;
  const active = earlyBird && new Date() < new Date(earlyBird.endsAt);
  if (!active) return null;

  const savings = DISTANCE_PRICES[DISTANCE_OPTIONS[0]].standardPrice - earlyBird.price;
  // `endsAt` is the cutoff moment (midnight starting the next day), so
  // the last eligible day is one day earlier — show that, not the
  // cutoff itself.
  const endsLabel = new Date(
    new Date(earlyBird.endsAt).getTime() - 86400000,
  ).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[14px] border px-5 py-4",
        variant === "dark"
          ? "border-white/20 bg-white/10 backdrop-blur-sm"
          : "border-brand-green/30 bg-brand-green/8",
        className,
      )}
    >
      <Sparkles
        className={cn("size-5 shrink-0", variant === "dark" ? "text-brand-yellow" : "text-brand-green")}
      />
      <p
        className={cn(
          "font-sans text-sm leading-relaxed",
          variant === "dark" ? "text-white/85" : "text-brand-teal",
        )}
      >
        <span className={cn("font-bold", variant === "dark" && "text-brand-yellow")}>
          Early-bird pricing is live — save ₦{savings.toLocaleString("en-NG")}
        </span>{" "}
        on your registration. Lock it in before it ends {endsLabel}.
      </p>
    </div>
  );
}
