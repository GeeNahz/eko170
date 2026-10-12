"use client";

import { Download } from "lucide-react";
import { GPX_DOWNLOADS } from "../constants";

// Triggers both GPX files as separate downloads from one click — a
// plain <a download> can only carry one file, and there's no zip step
// in this project, so this fires one programmatic download per file.
function downloadAll() {
  GPX_DOWNLOADS.forEach(({ href, filename }, i) => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = href;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, i * 200);
  });
}

export function GpxDownloadButton() {
  return (
    <button
      type="button"
      onClick={downloadAll}
      className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
    >
      <Download className="size-4" />
      Download GPX
    </button>
  );
}
