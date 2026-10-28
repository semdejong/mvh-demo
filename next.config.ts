import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1800],
    imageSizes: [64, 96, 128, 180, 256, 320, 384, 480, 640],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    const pairs: [string, string][] = [
      ["/eps", "/toepassingen/eps"],
      ["/spuitgietwerk", "/toepassingen/spuitgietwerk"],
      ["/rotatie", "/toepassingen/rotatie"],
      ["/blisters", "/toepassingen/blisters"],
      ["/vrije-vorm", "/toepassingen/vrije-vorm"],
      ["/startseite", "/de"],
      ["/maschinenpark", "/de/maschinenpark"],
      ["/kontakt", "/de/kontakt"],
      ["/vakanz", "/de/vakanz"],
      ["/project/project1", "/toepassingen"],
      ["/145-2", "/toepassingen"],
    ];
    return pairs.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;
