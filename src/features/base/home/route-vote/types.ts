export type RouteVoteOption = {
  id: "a" | "b";
  eyebrow: string;
  title: string;
  description: string;
  shape: string;
  character: string;
  path: [number, number][];
  mapImage: string;
};

export type RouteVoteFormValues = {
  optionId: string;
  fullName: string;
  email: string;
  distance: string;
  reason: string;
};

export type RouteVoteFieldErrors = Partial<Record<keyof RouteVoteFormValues, string>>;

export type RouteVoteSuccess = {
  optionId: string;
};
