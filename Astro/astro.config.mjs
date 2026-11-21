import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Canonical domain (CNAME at the repo root). Used for canonical URLs,
  // Open Graph tags, and the sitemap.
  site: "https://datasciencedynamics.com",
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    // Inline small per-page stylesheets to save a request on first paint.
    inlineStylesheets: "auto",
  },
});
