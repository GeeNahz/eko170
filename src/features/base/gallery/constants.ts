import type { GalleryCategory } from "./types";

function photo(file: string) {
  return { id: file, src: `/images/${file}.jpg`, alt: `EKO170 — ${file}` };
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "start-line",
    title: "Start Line",
    photos: [
      "CR2A2667",
      "CR2A2694",
      "CR2A2733",
      "CR2A2756",
      "CR2A2792",
      "CR2A2827",
      "CR2A2850",
      "CR2A2877",
    ].map(photo),
  },
  {
    id: "on-the-road",
    title: "On the Road",
    photos: [
      "DSC_1924",
      "DSC_1950",
      "DSC_1979",
      "DSC_2004",
      "DSC_2032",
      "DSC_2056",
      "DSC_2087",
      "DSC_2129",
      "DSC_2160",
      "CR2A2942",
      "CR2A2986",
      "CR2A3040",
      "CR2A3071",
      "CR2A3087",
      "CR2A3097",
    ].map(photo),
  },
  {
    id: "finish-podium",
    title: "Finish & Podium",
    photos: [
      "CR2A3106",
      "CR2A3126",
      "CR2A3152",
      "CR2A3170",
      "CR2A3207",
      "CR2A3221",
      "CR2A3245",
      "CR2A3254",
      "CR2A3261",
      "DSC_2208",
      "DSC_2255",
      "DSC_2320",
      "DSC_2459",
      "DSC_2480",
    ].map(photo),
  },
  {
    id: "race-village",
    title: "Race Village",
    photos: [
      "DSC_1626",
      "DSC_1669",
      "DSC_1708",
      "DSC_1750",
      "DSC_1778",
      "DSC_1805",
      "DSC_1842",
      "DSC_1868",
      "DSC_1892",
    ].map(photo),
  },
];
