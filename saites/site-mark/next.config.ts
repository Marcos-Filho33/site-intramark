import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  allowedDevOrigins: ["localhost", "192.168.1.131"],
};

export default nextConfig;
