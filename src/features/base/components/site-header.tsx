import { TopBar } from "../event/components/top-bar";
import { NavBar } from "../navigation/components/nav-bar";

export function SiteHeader() {
  return (
    <>
      <TopBar />
      <NavBar />
      {/* Offsets content below the fixed topbar (36px) + navbar (88px).
          The Home hero pulls itself up under this with a negative margin
          instead of skipping the spacer, so SiteHeader stays route-agnostic. */}
      <div className="h-[124px]" />
    </>
  );
}
