import type { PartnerFormValues } from "./types";

export const FIELD_LABELS: Record<keyof PartnerFormValues, string> = {
  organisation: "Company/Organisation name",
  contactName: "Contact person",
  email: "Email",
  phone: "Phone number",
  partnershipType: "Partnership type",
  howToPartner: "How would you like to partner with EKO170?",
  goals: "What would you like to achieve through the partnership?",
};

export const REQUIRED_FIELDS: (keyof PartnerFormValues)[] = [
  "organisation",
  "contactName",
  "email",
  "phone",
  "partnershipType",
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PARTNERSHIP_TYPE_OPTIONS = [
  "Sponsorship",
  "In-Kind Support",
  "Media Partnership",
  "Community Partnership",
  "Other",
];
