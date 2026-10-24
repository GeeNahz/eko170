import { Download } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function TrainingCalendar() {
  return (
    <div
      id="training"
      className="overflow-hidden bg-white px-5 pt-11 pb-12 text-center sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal className="mb-4 font-mono text-xs tracking-wide text-brand-green uppercase">
          Get Race Ready
        </Reveal>
        <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
          12-Week Training Calendar
        </h2>
        <p className="mx-auto mb-8 max-w-[520px] font-sans text-base leading-relaxed text-gray-500">
          Starting 19 October 2026, our 12-week plan builds from a
          comfortable 60km (Gran Fondo 170km) or 35km (Medio Fondo 94.5km)
          base ride up to race day on 10 January 2027 — steady weekly
          distance, built-in recovery weeks, and a taper before the start
          line.
        </p>
        <a
          href="/docs/EKO170_2027_12_Week_Rider_Training_Calendar.pdf"
          download
          className="inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
        >
          <Download className="size-4" />
          Download Training Calendar
        </a>
      </div>
    </div>
  );
}
