import { HomeRevamped } from "@/features/base/home/components/home-revamped";

// To swap back to the pre-update Home, import and render HomeCurrent
// (src/features/base/home/components/home-current.tsx) instead — both
// trees are kept intact so this is a one-line change either way.
export default function HomePage() {
  return <HomeRevamped />;
}
