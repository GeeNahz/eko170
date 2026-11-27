import { Reveal } from "@/components/motion/reveal";

type PolicySection = {
  heading: string;
  body: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
};

// Shared layout for /privacy and /terms. Both pages carry real,
// reasonable content for how EKO170 operates today rather than a
// "coming soon" stub — see the note below the title — swapped for the
// organiser's own legal-reviewed version once that exists.
export function PolicyPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: PolicyPageProps) {
  return (
    <div className="mx-auto w-full max-w-[1280px] bg-brand-cream px-5 pt-10 pb-10 sm:px-10 sm:pt-18">
      <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
        {eyebrow}
      </Reveal>
      <Reveal
        delay={0.1}
        className="font-heading text-5xl leading-[0.95] font-black text-brand-teal uppercase sm:text-6xl"
      >
        {title}
      </Reveal>
      <Reveal
        delay={0.15}
        className="mt-3 font-mono text-xs tracking-wide text-gray-400"
      >
        Last updated {lastUpdated}
      </Reveal>
      <Reveal
        delay={0.2}
        className="mt-5 max-w-[680px] rounded-xl border border-brand-cream-border bg-white/70 px-4 py-3 font-sans text-sm leading-relaxed text-gray-500"
      >
        This is a general policy consistent with how EKO170 operates
        today. The organiser may issue a more specific, legally
        reviewed version — this page will be updated when they do.
      </Reveal>

      <div className="mt-8 max-w-[760px] overflow-hidden rounded-[22px] bg-white px-5 py-11 sm:px-10 sm:py-14">
        <p className="font-sans text-base leading-relaxed text-gray-600">
          {intro}
        </p>
        <div className="mt-8 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-lg font-bold text-brand-teal">
                {section.heading}
              </h2>
              <div className="mt-2 flex flex-col gap-2">
                {section.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-sans text-sm leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
