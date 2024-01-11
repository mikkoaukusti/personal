import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true, // bypass the cache by passing `astro build --force`
  },
  site: "https://jokipuu.dev",
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "min-light",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [
    tailwind({
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
});
