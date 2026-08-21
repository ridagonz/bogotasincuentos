import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel compiles the standard Next.js application. Sites keeps validating
  // the Worker-specific sources through its Vinext build.
  ...(process.env.VERCEL === "1"
    ? { typescript: { tsconfigPath: "tsconfig.vercel.json" } }
    : {}),
};

export default nextConfig;
