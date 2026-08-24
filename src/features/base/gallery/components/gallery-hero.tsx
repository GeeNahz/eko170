import { Reveal } from "@/components/motion/reveal";

export function GalleryHero() {
  return (
    <div className="bg-brand-teal px-5 pt-7.5 pb-8.5 sm:mx-auto sm:w-full sm:max-w-[1280px] sm:bg-transparent sm:px-10 sm:pt-18 sm:pb-10">
      <Reveal className="mb-4 border-l-4 border-brand-yellow pl-3 font-mono text-xs tracking-wide text-brand-yellow uppercase sm:border-brand-green sm:text-brand-green">
        Moments in Motion
      </Reveal>
      <Reveal
        delay={0.1}
        className="font-heading text-6xl leading-[0.9] font-black text-white uppercase sm:text-7xl sm:text-brand-teal"
      >
        The Race, Captured
      </Reveal>
      <Reveal
        delay={0.2}
        className="mt-4 max-w-[620px] font-sans text-base leading-relaxed text-white/78 sm:text-gray-500"
      >
        Every ride tells a story. Relive EKO170 through the lens — the
        start-line energy, the bridge crossings, and the finish-line
        celebration. Click any photo to view it full-screen.
      </Reveal>
    </div>
  );
}
