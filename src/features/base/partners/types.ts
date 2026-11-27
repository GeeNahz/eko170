export type PartnerStat = {
  id: string;
  value: string;
  label: string;
};

export type PartnerLogo = {
  id: string;
  name: string;
  src: string;
  href?: string;
};

export type FeaturedPartner = PartnerLogo & {
  billing?: string;
  description: string;
};

export type RaceDaySupportPartner = PartnerLogo & {
  billing?: string;
  description?: string;
  // Renders a larger logo within the grid tile — used to give Medbury
  // more visual weight than the other race-day support entries.
  large?: boolean;
};

export type RaceDayWidePartner = PartnerLogo & {
  description?: string;
};

export type WhyPartnerCard = {
  id: string;
  title: string;
  description: string;
};
