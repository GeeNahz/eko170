import type { DistancePriceConfig, RegistrationFormValues } from "./types";

export const FIELD_LABELS: Record<keyof RegistrationFormValues, string> = {
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone number",
  email: "Email",
  gender: "Gender",
  dob: "Date of birth",
  distance: "Distance",
  speed: "Speed",
  country: "Country",
  license: "Cycling license number",
  club: "Cycling club name",
  idType: "ID type",
  idNumber: "ID number",
  insProvider: "Insurance provider",
  insNumber: "Enrollee number",
  emergencyName: "Emergency contact name",
  emergencyPhone: "Emergency contact phone",
};

export const REQUIRED_FIELDS: (keyof RegistrationFormValues)[] = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "gender",
  "dob",
  "distance",
  "speed",
  "country",
  "idType",
  "idNumber",
  "emergencyName",
  "emergencyPhone",
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const GENDER_OPTIONS = ["Male", "Female"];

export const DISTANCE_OPTIONS = ["Medio Fondo · 94.5 KM", "Gran Fondo · 170 KM"];

// NGN. Standard price matches the route detail pages
// (routes/constants.ts). `earlyBird` is optional per distance — add it
// whenever a promo is actually running; no distance has one configured
// right now, so resolveDistancePrice always falls through to the
// standard price today.
export const DISTANCE_PRICES: Record<string, DistancePriceConfig> = {
  "Medio Fondo · 94.5 KM": { standardPrice: 40000 },
  "Gran Fondo · 170 KM": { standardPrice: 75000 },
};

// Not server-only — the registration form's fee display calls this
// client-side too. `now` is injectable for tests, defaults to the real
// clock.
export function resolveDistancePrice(
  distance: string,
  now: Date = new Date(),
): number | undefined {
  const config = DISTANCE_PRICES[distance];
  if (!config) return undefined;
  if (config.earlyBird && now < new Date(config.earlyBird.endsAt)) {
    return config.earlyBird.price;
  }
  return config.standardPrice;
}

export const SPEED_OPTIONS = [">40kph", "35 - 40", "30 - 35", "25 - 30", "<25"];

export const ID_TYPE_OPTIONS = [
  "NIN",
  "Drivers License",
  "Voters ID",
  "International Passport",
];
