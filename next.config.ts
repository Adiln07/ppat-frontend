import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ppatpengdapareparedst.web.id",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
