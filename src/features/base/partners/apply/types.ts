export type PartnerFormValues = {
  organisation: string;
  contactName: string;
  email: string;
  phone: string;
  partnershipType: string;
  howToPartner: string;
  goals: string;
};

export type PartnerFieldErrors = Partial<Record<keyof PartnerFormValues, string>>;

export type PartnerSuccess = {
  organisation: string;
};
