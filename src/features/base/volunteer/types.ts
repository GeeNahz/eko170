export type VolunteerFormValues = {
  fullName: string;
  age: string;
  phone: string;
  email: string;
  inCommunity: string;
  organisation: string;
};

export type VolunteerFieldErrors = Partial<Record<keyof VolunteerFormValues, string>>;

export type VolunteerSuccess = {
  name: string;
};
