export type EventCard = {
  id: string;
  title: string;
  distanceLabel: string;
  dateLabel: string;
  resultsHref: string;
  registerHref: string;
  registerLabel: string;
};

export type SeedingEvent = {
  id: string;
  distanceLabel: string;
  location: string;
  title: string;
  dateLabel: string;
  terrainLabel: string;
  distanceKm: number;
  registerHref: string;
};

export type FeatureCard = {
  id: string;
  title: string;
  description: string;
};

export type DistanceCard = {
  id: string;
  image: string;
  distanceValue: string;
  distanceSuffix: string;
  tagline: string;
  title: string;
  description: string;
  tags: string[];
  terrain: string;
};
