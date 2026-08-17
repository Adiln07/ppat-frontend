import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ppatpengdapareparedst.web.id",

        // protocol: "http",
        // hostname: "localhost",
        // port: "5000",

        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
