import { Reveal } from "@/components/motion/reveal";

const STATS = [
  { id: "shift", label: "Minimum Shift", value: "1 Day" },
  { id: "age", label: "Age Requirement", value: "16+" },
];

export function VolunteerHero() {
  return (
    <>
      <div className="relative overflow-hidden bg-brand-teal px-5 pt-[30px] pb-[34px] text-center sm:mx-4 sm:mt-4 sm:rounded-t-[22px] sm:px-10 sm:py-24">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 14px, transparent 14px 28px)",
          }}
        />
        <div className="relative mx-auto max-w-[720px]">
          <Reveal className="mb-4 font-mono text-xs tracking-[2px] text-brand-yellow uppercase">
            Join the Crew
          </Reveal>
          <Reveal
            delay={0.1}
            className="font-heading text-5xl leading-[0.95] font-black text-white uppercase sm:text-6xl lg:text-7xl"
          >
            Volunteer Sign-Up
          </Reveal>
          <Reveal
            delay={0.15}
            className="mt-4 font-sans text-sm text-white/82 sm:text-base"
          >
            500+ volunteers marshal corners, run feed zones and hang
            medals. Kit, meals and a front-row seat to race day included.
          </Reveal>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-brand-teal-deep px-5 py-4.5 sm:mx-4 sm:rounded-b-[22px] sm:px-10">
        {STATS.map((stat) => (
          <div key={stat.id}>
            <div className="font-heading text-2xl font-black text-white italic sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-[1.6px] text-white/60 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
