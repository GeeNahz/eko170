import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Minimal, self-contained build output for Docker/VPS deployments.
  // Must be disabled on Vercel: it changes how Next writes its build
  // trace files, which breaks Vercel's own build wrapper (ENOENT on
  // next-server.js.nft.json). Vercel sets VERCEL=1 during its builds.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
};

export default nextConfig;
