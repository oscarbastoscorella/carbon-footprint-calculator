import system from "../src/theme/customTheme";
import type { Preview } from "@storybook/react";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <Story />
      </ChakraProvider>
    ),
    withThemeByClassName({
      defaultTheme: "dark",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
