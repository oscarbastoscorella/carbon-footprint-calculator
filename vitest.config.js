import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      exclude: ["node_modules/**"],
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      css: false,
      resolve: {
        alias: {
          "@test-utils": new URL("./src/test/test-utils.tsx", import.meta.url)
            .pathname,
        },
      },
    },
  }),
);
