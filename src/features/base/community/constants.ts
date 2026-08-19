import type { CommunityCard, CommunityStat } from "./types";

export const COMMUNITY_STATS: CommunityStat[] = [
  { id: "stat-volunteers", value: "500+", label: "Volunteers" },
  { id: "stat-clubs", value: "24", label: "Cycling Clubs" },
  { id: "stat-raised", value: "₦25M", label: "Raised for Causes" },
  { id: "stat-recycled", value: "100%", label: "Waste Recycled" },
];

export const CLUB_CARDS: CommunityCard[] = [
  {
    id: "club-challenge",
    title: "The Club Challenge",
    description:
      "Enter as a club — your fastest four riders score, and the winning club lifts the team trophy.",
  },
  {
    id: "club-start-zones",
    title: "Group Start Zones",
    description:
      "Registered clubs roll out together in dedicated waves, colours flying.",
  },
  {
    id: "club-rides",
    title: "Year-Round Rides",
    description:
      "Partner clubs host official Saturday training rides across Lagos in the build-up.",
  },
];

export const CHARITY_CARDS: CommunityCard[] = [
  {
    id: "charity-official",
    title: "Official Causes",
    description:
      "Entries support cycling-safety education and youth sport programmes in Lagos schools.",
  },
  {
    id: "charity-fundraise",
    title: "Fundraise Your Ride",
    description:
      "Set up a fundraising page and dedicate your 170 or 70 to a cause you care about.",
  },
  {
    id: "charity-donations",
    title: "Bike Donations",
    description:
      "Retired bikes are refurbished and donated to commuting students who need them.",
  },
];

export const SUSTAINABILITY_CARDS: CommunityCard[] = [
  {
    id: "sustainability-zero-landfill",
    title: "Zero-to-Landfill",
    description:
      "Feed-zone waste is sorted on course; bottles and tubes are collected and recycled.",
  },
  {
    id: "sustainability-car-free",
    title: "A Car-Free City Day",
    description:
      "Race day doubles as Eko Atlantic's biggest car-free day of the year.",
  },
  {
    id: "sustainability-advocacy",
    title: "Advocacy",
    description:
      "EKO170 campaigns for protected bike lanes and safer roads across Lagos.",
  },
];
