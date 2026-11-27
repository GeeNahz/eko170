import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { GALLERY_PREVIEW } from "../../home/constants";

// Reuses the same confirmed race photography Home and /gallery already
// show — satisfies the doc's "verified inaugural-event photographs"
// ask without any new/unconfirmed assets.
export function PartnersGalleryPreview() {
  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-white px-5 pt-10 pb-11 sm:mx-4 sm:px-10 sm:py-20">
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          The Inaugural Event
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-9 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Moments From Race Day
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {GALLERY_PREVIEW.map((photo) => (
            <RevealItem
              key={photo.id}
              className="relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <Link
          href="/gallery"
          className="mt-6 inline-block font-sans text-sm font-semibold text-brand-green underline-offset-4 hover:underline"
        >
          See the full gallery →
        </Link>
      </div>
    </div>
  );
}
