import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Minimal, self-contained build output for Docker/VPS deployments.
  // Vercel's build pipeline ignores this and is unaffected.
  output: "standalone",
};

export default nextConfig;
