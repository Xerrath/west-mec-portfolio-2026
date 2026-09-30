import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Pages built ahead of time (Home, My Story, Classroom) are served from Cloudflare's static assets.
// The blog pages are rendered on every visit instead (see src/app/blog), so no R2 bucket or queue is needed.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
