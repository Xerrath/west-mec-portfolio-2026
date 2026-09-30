import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    // Covers and post images uploaded to True Blogger
    remotePatterns: [new URL("https://true-blogger-api.app/api/uploads/**")],
  },
};

export default nextConfig;

// Lets `npm run dev` use the same Cloudflare bindings (like IMAGES) that the deployed site has
initOpenNextCloudflareForDev();
