import type { Attraction, DiscoverCard, TimelineDay } from "./types";

export const ATTRACTIONS: Attraction[] = [
  {
    id: "attraction-nike-art",
    image: "/images/sm-DSC_2129.jpg",
    category: "Art",
    title: "Nike Art Gallery",
    description:
      "Four floors of Nigerian art in Lekki — a Lagos institution and a must-visit.",
  },
  {
    id: "attraction-tarkwa-bay",
    image: "/images/sm-DSC_2480.jpg",
    category: "Beach",
    title: "Tarkwa Bay",
    description:
      "A boat-ride beach escape, calm water and golden sand minutes from the marina.",
  },
  {
    id: "attraction-freedom-park",
    image: "/images/sm-DSC_1842.jpg",
    category: "History",
    title: "Freedom Park",
    description:
      "A colonial-era prison turned arts, music and memory park on Lagos Island.",
  },
];

export const HOTEL_CARDS: DiscoverCard[] = [
  {
    id: "hotel-eko",
    title: "Eko Hotel & Suites",
    description:
      "The event's home base on Victoria Island — rider rates, late checkout and shuttle to the start.",
  },
  {
    id: "hotel-radisson",
    title: "Radisson Blu, VI",
    description:
      "Ocean-view rooms and a lap pool, a short warm-up spin from Eko Atlantic.",
  },
  {
    id: "hotel-george",
    title: "The George, Ikoyi",
    description: "A quiet boutique stay for riders who want calm before the storm.",
  },
];

export const RESTAURANT_CARDS: DiscoverCard[] = [
  {
    id: "restaurant-nok",
    title: "Nok by Alara",
    description:
      "Contemporary West African cuisine in a design landmark — book ahead for race weekend.",
  },
  {
    id: "restaurant-waterfront",
    title: "Waterfront Dining",
    description:
      "Fresh seafood and sundowners on the Lagos Lagoon, perfect for the night before.",
  },
  {
    id: "restaurant-street-food",
    title: "Street Food Safari",
    description:
      "Suya, puff-puff and the original jollof — the pre-race carb-load done right.",
  },
];

export const TRANSPORT_CARDS: DiscoverCard[] = [
  {
    id: "transport-airport",
    title: "From the Airport",
    description:
      "Murtala Muhammed International is 45–75 minutes from Eko Atlantic — pre-book an official transfer.",
  },
  {
    id: "transport-city",
    title: "Around the City",
    description:
      "Ride-hailing is easy and safe; allow extra time for Lagos traffic, especially on Friday.",
  },
  {
    id: "transport-race-day",
    title: "On Race Day",
    description:
      "Dedicated rider parking, bike drop-off and shuttle zones at the Eko Atlantic Race Village.",
  },
];

export const RACE_WEEKEND_TIMELINE: TimelineDay[] = [
  {
    id: "day-friday",
    day: "Fri",
    title: "Arrive & Settle",
    description:
      "Land, check in, collect your rider pack at the Race Village, then an easy shakeout spin and early dinner.",
  },
  {
    id: "day-saturday",
    day: "Sat",
    title: "Explore & Rest",
    description:
      "A slow morning on the coast or at the gallery, bike check in the afternoon, carb-load and lights out.",
  },
  {
    id: "day-sunday",
    day: "Sun",
    title: "Ride & Celebrate",
    description:
      "Dawn start on closed roads, the finish-line festival by midday, and the city to celebrate in all night.",
  },
];
