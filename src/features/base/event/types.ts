export type EventSocialLink = {
  id: string;
  platform: "instagram" | "twitter" | "facebook";
  href: string;
};

export type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export type EventDetails = {
  id: string;
  name: string;
  eventDate: string;
  dateLabel: string;
  location: string;
  distancesKm: number[];
  tickerFacts: string[];
  contactEmail: string;
  contactTwitter: string;
  socials: EventSocialLink[];
};
