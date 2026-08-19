import type { GalleryPhoto } from "../lib/types";

export type GalleryCategory = {
  id: string;
  title: string;
  photos: GalleryPhoto[];
};
