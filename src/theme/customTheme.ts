import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { globalCss } from "./global-css";
import { tokens } from "./tokens";
import { semanticTokens } from "./semantic-tokens";
import { recipes } from "./recipes";

const config = defineConfig({
  globalCss,
  theme: {
    tokens,
    semanticTokens,
    recipes,
  },
});

export const system = createSystem(defaultConfig, config);

export default system;
