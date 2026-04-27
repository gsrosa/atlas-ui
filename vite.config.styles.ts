import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { defineConfig } from "vite";

/** Emits dist/nexploring-ui.css (Tailwind + design-system sources). Lib build stays JS-only. */
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/styles/styles-entry.ts"),
      formats: ["es"],
      fileName: () => ".nexploring-ui-styles-entry",
    },
    rollupOptions: {
      output: {
        assetFileNames: "nexploring-ui.css",
      },
    },
  },
});
