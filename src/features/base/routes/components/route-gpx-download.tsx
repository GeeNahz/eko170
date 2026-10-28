import { Download } from "lucide-react";

export function RouteGpxDownload({
  href,
  filename,
}: {
  href: string;
  filename: string;
}) {
  return (
    <a
      href={href}
      download={filename}
      className="inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-green px-6 py-4 font-sans text-sm font-semibold text-white"
    >
      <Download className="size-4" />
      Download GPX
    </a>
  );
}
