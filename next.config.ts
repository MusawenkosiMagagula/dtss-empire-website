import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optional: Add basePath if you're deploying to a subdirectory
  // basePath: '/your-repo-name',
  
  /* other config options here */
};

export default nextConfig;