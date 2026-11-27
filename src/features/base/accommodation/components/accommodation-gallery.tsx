import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { NORDIC_HOTEL_PHOTOS } from "../constants";

export function AccommodationGallery() {
  const [hero, ...rest] = NORDIC_HOTEL_PHOTOS;

  return (
    <div className="mx-auto w-full max-w-[720px] px-5 pt-10 sm:px-10">
      <Reveal className="mb-5 font-mono text-xs tracking-wide text-brand-green uppercase">
        Inside Nordic Hotel Lagos
      </Reveal>
      <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4">
        <RevealItem className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl sm:row-span-2 sm:aspect-auto">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </RevealItem>
        {rest.map((photo) => (
          <RevealItem
            key={photo.id}
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
