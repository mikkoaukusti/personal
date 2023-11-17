import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true, // bypass the cache by passing `astro build --force`
  },
  prefetch: true,
  integrations: [
    tailwind({
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
  ],
});
