import { defineConfig } from "vite";

export default defineConfig({
  // A relative path fixes ALL GitHub Pages naming and case-sensitivity issues
  base: "./",
  build: {
    outDir: "dist",
  },
});