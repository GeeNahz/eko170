import { Reveal } from "@/components/motion/reveal";

export function GalleryHero() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 pt-18 pb-10 sm:px-10">
      <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
        Moments in Motion
      </Reveal>
      <Reveal
        delay={0.1}
        className="font-heading text-6xl leading-[0.9] font-black text-brand-teal uppercase sm:text-7xl"
      >
        The Race, Captured
      </Reveal>
      <Reveal
        delay={0.2}
        className="mt-4 max-w-[620px] font-sans text-base leading-relaxed text-gray-500"
      >
        Every ride tells a story. Relive EKO170 through the lens — the
        start-line energy, the bridge crossings, and the finish-line
        celebration. Click any photo to view it full-screen.
      </Reveal>
    </div>
  );
}
