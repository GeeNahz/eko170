import { Ticker } from "@/features/base/event/components/ticker";

export default function ContentLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Ticker />
      {children}
    </>
  );
}
