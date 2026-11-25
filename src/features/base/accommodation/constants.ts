import type { AccommodationFormValues, HotelPhoto } from "./types";

export const FIELD_LABELS: Record<keyof AccommodationFormValues, string> = {
  name: "Full name",
  address: "Address",
  email: "Email",
  phone: "Phone number",
};

export const REQUIRED_FIELDS: (keyof AccommodationFormValues)[] = [
  "name",
  "address",
  "email",
  "phone",
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NORDIC_HOTEL_PHOTOS: HotelPhoto[] = [
  {
    id: "pool",
    src: "/images/accommodation/nordic-pool.jpeg",
    alt: "Nordic Hotel Lagos outdoor pool and garden terrace",
  },
  {
    id: "bedroom",
    src: "/images/accommodation/nordic-bedroom.jpeg",
    alt: "A guest room at Nordic Hotel Lagos",
  },
  {
    id: "entrance",
    src: "/images/accommodation/nordic-entrance.jpeg",
    alt: "Nordic Hotel Lagos entrance and reception at dusk",
  },
  {
    id: "gym",
    src: "/images/accommodation/nordic-gym.jpeg",
    alt: "Nordic Hotel Lagos fitness centre",
  },
  {
    id: "lobby",
    src: "/images/accommodation/nordic-lobby.jpeg",
    alt: "Nordic Hotel Lagos lobby lounge",
  },
];
