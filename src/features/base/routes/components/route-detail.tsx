import type { RouteDetailData } from "../types";
import { RouteDescription } from "./route-description";
import { RouteDetailHero } from "./route-detail-hero";
import { RouteEntries } from "./route-entries";
import { RouteFaqs } from "./route-faqs";
import { RouteFinish } from "./route-finish";
import { RouteIntroduction } from "./route-introduction";
import { RouteMoreAbout } from "./route-more-about";
import { RouteStart } from "./route-start";
import { RouteSubNav } from "./route-sub-nav";

export function RouteDetail({ data }: { data: RouteDetailData }) {
  return (
    <>
      <RouteDetailHero data={data} />
      <RouteSubNav navLabel={data.navLabel} />
      <RouteEntries data={data} />
      <RouteIntroduction data={data} />
      <RouteDescription data={data} />
      <RouteStart data={data} />
      <RouteFinish data={data} />
      <RouteMoreAbout data={data} />
      <RouteFaqs />
    </>
  );
}
