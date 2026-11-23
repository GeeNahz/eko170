import type { AccommodationFormValues } from "./types";

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
