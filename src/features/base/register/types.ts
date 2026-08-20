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
