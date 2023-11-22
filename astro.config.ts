import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true, // bypass the cache by passing `astro build --force`
  },
  site: "http://www.localhost:4321",
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "one-dark-pro",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [
    tailwind({
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
  ],
});
