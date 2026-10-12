export type RouteCategoryCard = {
  id: string;
  image: string;
  distanceValue: string;
  distanceSuffix: string;
  title: string;
  description: string;
  href: string;
};

export type SupportFeature = {
  id: string;
  title: string;
  description: string;
};

export type RouteFaq = {
  id: string;
  question: string;
  answer: string;
};

export type RouteDetailData = {
  slug: string;
  navLabel: string;
  distanceLabel: string;
  heroImage: string;
  routeDescriptionImage: string;
  startImage: string;
  finishImage: string;
  price: string;
  earlyBirdPrice: string;
  distanceKm: string;
  introEyebrow: string;
  introHeading: string;
  introBody: string;
  routeDescHeading: string;
  routeDescription: string;
  path: [number, number][];
  startWaveBody: string;
};
