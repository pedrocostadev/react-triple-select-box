/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { copyFileSync } from "fs";

// Plugin to copy TypeScript declaration file to dist
const copyDts = () => ({
  name: "copy-dts",
  closeBundle() {
    copyFileSync(
      resolve(__dirname, "src/index.d.ts"),
      resolve(__dirname, "dist/index.d.ts")
    );
  },
});

export default defineConfig({
  plugins: [react(), copyDts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ReactTripleSelectBox",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "prop-types"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "prop-types": "PropTypes",
        },
        assetFileNames: "styles[extname]",
      },
    },
    copyPublicDir: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "lcov"],
      include: ["src/**/*.{js,jsx}"],
      exclude: ["**/*.test.jsx"],
    },
  },
});
