import { resolve } from "path";

import { defineConfig } from "vitest/config";
// import Vue from "@vitejs/plugin-vue";

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  // plugins: [Vue()],
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "scripts/**",
    ],
    include: [
      "./packages/components/__tests__/**",
    ],
    environment: "jsdom",
  },

  resolve: {
    alias: {
      "@ovometajs/*":  r("./packages/*/src")
    },
  },
});
