import type { RouteDetailData } from "../types";
import { RouteClosingCta } from "./route-closing-cta";
import { RouteDescription } from "./route-description";
import { RouteDetailHero } from "./route-detail-hero";
import { RouteDetailMap } from "./route-detail-map";
import { RouteEntries } from "./route-entries";
import { RouteFaqs } from "./route-faqs";
import { RouteFinish } from "./route-finish";
import { RouteIntroduction } from "./route-introduction";
import { RouteStart } from "./route-start";
import { RouteSubNav } from "./route-sub-nav";
import { REGISTRATION } from "../../lib/server/registration";

export function RouteDetail({ data }: { data: RouteDetailData }) {
  return (
    <>
      {/*<RouteDetailHero data={data} />*/}
      {/*<RouteSubNav navLabel={data.navLabel} registration={REGISTRATION} />*/}
      {/*<RouteEntries data={data} />*/}
      <RouteIntroduction data={data} />
      {/*<RouteDescription data={data} />*/}
      <RouteDetailMap data={data} />
      {/*<RouteStart data={data} />*/}
      {/*<RouteFinish data={data} />*/}
      <RouteFaqs />
      <RouteClosingCta />
    </>
  );
}
