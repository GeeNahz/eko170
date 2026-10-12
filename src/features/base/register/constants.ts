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
  medicalWaiverAgreed: "Medical/liability waiver agreed",
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

// NGN. Flat pricing across both distances (client decision — one price
// for every route, not a per-distance one). Matches the route detail
// pages (routes/constants.ts). Early-bird ends 15 Nov 2026; the
// standard ("late-bird") price takes over from 16 Nov 2026.
export const DISTANCE_PRICES: Record<string, DistancePriceConfig> = {
  "Medio Fondo · 94.5 KM": {
    standardPrice: 35000,
    earlyBird: { price: 25000, endsAt: "2026-11-16T00:00:00+01:00" },
  },
  "Gran Fondo · 170 KM": {
    standardPrice: 35000,
    earlyBird: { price: 25000, endsAt: "2026-11-16T00:00:00+01:00" },
  },
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

// Client-supplied legal text (2026-10-12), shown in the medical-waiver
// modal before a rider can submit. Minor fixes applied to what was
// pasted in: a handful of words were missing their "ff" ligature
// ("tra ic" -> "traffic", "su iciently" -> "sufficiently", "o icial" ->
// "official") and sections 2/3 had a stray leading "I" before the
// heading — both are copy/paste artifacts from the source document, not
// intentional wording. Content itself is unchanged.
export const MEDICAL_WAIVER_TITLE = "Liability and Risk Declaration";
export const MEDICAL_WAIVER_SUBTITLE = "EKO170 Gran Fondo · January 2027";

export const MEDICAL_WAIVER_INTRO =
  "By registering for and/or participating in the EKO170 Gran Fondo, I confirm that I have read, understood and accepted this Liability and Risk Declaration as well as the Regulations. Participation is voluntary and at my own risk.";

export const MEDICAL_WAIVER_SECTIONS: { title: string; body: string }[] = [
  {
    title: "1. Personal responsibility and open roads",
    body: "I acknowledge that the EKO170 takes place on public roads that are partially closed to traffic. I will comply at all times with Lagos road traffic law, traffic rules, signage and the instructions of the police, traffic marshals, route marshals and the organiser. I will ride with foresight, defensively and respectfully towards other participants and road users.",
  },
  {
    title: "2. Sporting risk and health",
    body: "I understand that cycling involves risks, including crashes, collisions, mechanical defects, weather conditions, exhaustion, injuries and serious or fatal accidents. I confirm that I am physically able to participate, sufficiently prepared and that I will not start if I have health concerns. The medical team or event team may withdraw me from the event if there are recognisable health risks.",
  },
  {
    title: "3. Equipment and safety",
    body: "I will wear a correctly fitted cycling helmet throughout the entire ride. My bicycle is roadworthy and complies with the Regulations. I am responsible for my equipment, spare parts and personal belongings, including any loss, theft or damage.",
  },
  {
    title: "4. Medical assistance",
    body: "I agree that, in the event of an accident, injury or illness, necessary medical assistance may be organised. Any costs for treatment, transport or rescue are borne by me or by my insurance.",
  },
  {
    title: "5. Liability",
    body: "To the extent permitted by law, I waive any claims against the organiser, its bodies, employees, volunteers, partners and sponsors arising from damage, injuries, losses or consequential costs in connection with my participation. Liability for intent and gross negligence remains reserved. Insurance is the responsibility of each participant.",
  },
  {
    title: "6. Photo, video and audio recordings",
    body: "I acknowledge that photo, video and audio recordings may be made during the event. The organiser may use such recordings free of charge for reporting, the website, social media, media relations, sponsor communication and future promotion of the EKO170. I may contact the organiser in case of justified concerns.",
  },
  {
    title: "7. Data processing and communication",
    body: "My personal data will be used for registration, payment, start lists, timing, results lists, safety, event communication, support and post-event processing. For these purposes, necessary data may be passed on to service providers such as the registration platform, timing provider, payment provider, photo/video service providers and technical partners. Event-related communication by e-mail is the official communication channel. Marketing newsletters are separate and voluntary.",
  },
  {
    title: "8. Cancellation, interruption and changes",
    body: "The organiser may change, neutralise, interrupt or cancel the event in cases of force majeure, safety risks, official orders, severe weather or other important reasons. This does not give rise to any further claims for travel, accommodation, equipment or other consequential costs.",
  },
];

// Exact text supplied by the client — rendered verbatim, including its
// lowercase "fondo", unlike the title heading above.
export const MEDICAL_WAIVER_CHECKBOX_LABEL =
  "I have read, understood and accept the Regulations, the participation conditions and the Liability and Risk Declaration of the EKO170 Gran fondo.";
