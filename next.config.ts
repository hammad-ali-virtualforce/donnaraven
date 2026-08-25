import type {
  NextConfig,
} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "donnaraven.yourvirtualforce.com",
        pathname: "/donnaraven/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;