export type AccommodationFormValues = {
  name: string;
  address: string;
  email: string;
  phone: string;
};

export type AccommodationFieldErrors = Partial<Record<keyof AccommodationFormValues, string>>;

export type AccommodationSuccess = {
  name: string;
};
