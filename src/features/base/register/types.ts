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

// Pricing is register's own business data, not shared elsewhere — stays
// here, not in the cross-feature lib/types.ts. `earlyBird` is optional:
// when absent, `standardPrice` always applies (today's flat pricing).
export type DistancePriceConfig = {
  standardPrice: number;
  earlyBird?: { price: number; endsAt: string }; // endsAt is an ISO date
};

// The result of a verified, successful payment-gateway transaction —
// the form data the gateway echoed back via `meta`, plus what was
// actually charged. `fields` carries the full form payload for the
// Sheets row. `gateway`/`gatewayRef` record which gateway processed it
// and its own reference, for reconciliation.
export type VerifiedRegistration = {
  refCode: string;
  distance: string;
  amount: number;
  currency: string;
  gateway: string;
  gatewayRef: string;
  name: string;
  email: string;
  fields: RegistrationFormValues;
};
