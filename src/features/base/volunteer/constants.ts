import type { VolunteerFormValues } from "./types";

export const FIELD_LABELS: Record<keyof VolunteerFormValues, string> = {
  fullName: "Full name",
  age: "Age",
  phone: "Phone number",
  email: "Email",
  inCommunity: "Are you part of a community/organisation?",
  organisation: "Organisation name",
};

export const REQUIRED_FIELDS: (keyof VolunteerFormValues)[] = [
  "fullName",
  "age",
  "phone",
  "email",
  "inCommunity",
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_VOLUNTEER_AGE = 16;

export const IN_COMMUNITY_OPTIONS = ["Yes", "No"];
