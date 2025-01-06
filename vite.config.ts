import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@ui": "/src/components/ui",
      "@ts-types": "/src/types",
      "@common": "/src/components/common",
      "@services": "/src/components/services",
      "@store": "/src/store",
    },
  },
});
