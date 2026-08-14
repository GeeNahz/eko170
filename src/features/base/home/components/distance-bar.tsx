import { DISTANCE_STATS } from "../constants";

export function DistanceBar() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-[#030712]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-6 py-7 sm:grid-cols-4 sm:px-10">
        {DISTANCE_STATS.map((stat, i) => (
          <div
            key={stat.id}
            className={
              "px-4 text-center " +
              (i > 0 ? "sm:border-l sm:border-white/[0.06]" : "")
            }
          >
            <div className="mb-1.5 font-mono text-[11px] tracking-wide text-gray-500 uppercase">
              {stat.label}
            </div>
            <div className="font-sans text-xl font-semibold text-white">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
