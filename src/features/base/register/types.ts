export type RegistrationFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
  distance: string;
  speed: string;
  country: string;
  license: string;
  club: string;
  idType: string;
  idNumber: string;
  insProvider: string;
  insNumber: string;
  emergencyName: string;
  emergencyPhone: string;
};

export type RegistrationFieldErrors = Partial<
  Record<keyof RegistrationFormValues, string>
>;

export type RegistrationSuccess = {
  name: string;
  email: string;
  refCode: string;
};

// The result of a verified, successful Flutterwave transaction — the
// form data Flutterwave echoed back via `meta`, plus what was actually
// charged. `fields` carries the full form payload for the Sheets row.
export type VerifiedRegistration = {
  refCode: string;
  distance: string;
  amount: number;
  currency: string;
  flwRef: string;
  name: string;
  email: string;
  fields: RegistrationFormValues;
};
