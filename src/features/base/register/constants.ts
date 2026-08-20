import type { RegistrationFormValues } from "./types";

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

export const DISTANCE_OPTIONS = ["70 KM", "170 KM"];

export const SPEED_OPTIONS = [">40kph", "35 - 40", "30 - 35", "25 - 30", "<25"];

export const ID_TYPE_OPTIONS = [
  "NIN",
  "Drivers License",
  "Voters ID",
  "International Passport",
];
