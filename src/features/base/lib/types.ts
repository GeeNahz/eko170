export type RouteStat = {
  id: string;
  label: string;
  value: string;
};

export type FigureStat = {
  id: string;
  value: string;
  label: string;
};

export type SponsorLogo = {
  id: string;
  name: string;
  src: string;
};

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
};

export type RegistrationState = "pre-register" | "register" | "starting_soon";

export type RegistrationConfig = {
  state: RegistrationState;
  href: string;
  label: string;
  isOpen: boolean;
  opensAt: string | null; // ISO date, for the countdown
  opensAtLabel: string | null; // e.g. "13 October 2026"
};

export interface PaymentGateway {
  readonly id: "flutterwave" | "paystack";
  // Throws with a clear "X is not set" message if this gateway's
  // required env vars are missing — called before a rider ever
  // reaches checkout.
  assertConfigured(): void;
  initiatePayment(args: InitiatePaymentArgs): Promise<string>; // checkout URL
  verifyTransaction(identifier: string): Promise<VerifiedTransaction>;
}

export type InitiatePaymentArgs = {
  txRef: string;
  amount: number;
  currency: string;
  email: string;
  name: string;
  phone: string;
  redirectUrl: string;
  title: string;
  description: string;
  meta: Record<string, string>;
};

// Normalized across gateways — `status` is the literal "successful" on
// a successful charge for both Flutterwave and Paystack (Paystack's
// native "success" is mapped to it), so callers never branch on which
// gateway ran.
export type VerifiedTransaction = {
  reference: string;
  gatewayRef: string;
  status: string;
  amount: number;
  currency: string;
  meta: Record<string, string> | null;
};
