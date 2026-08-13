import { ScrollToTop } from "@/features/base/components/scroll-to-top";
import { SiteFooter } from "@/features/base/components/site-footer";
import { SiteHeader } from "@/features/base/components/site-header";

export default function BaseLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
