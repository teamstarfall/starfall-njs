import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lastfm.freetls.fastly.net",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "openweathermap.org",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "e621dle.starfall.team",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
