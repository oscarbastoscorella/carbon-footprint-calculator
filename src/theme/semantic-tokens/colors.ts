import { defineSemanticTokens } from "@chakra-ui/react";

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: {
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.800}",
      },
    },
  },
  primary: {
    contrast: {
      value: {
        _light: "white",
        _dark: "black",
      },
    },
    fg: {
      value: {
        _light: "{colors.primary.700}",
        _dark: "{colors.primary.300}",
      },
    },
    subtle: {
      value: {
        _light: "{colors.primary.100}",
        _dark: "{colors.primary.900}",
      },
    },
    muted: {
      value: {
        _light: "{colors.primary.200}",
        _dark: "{colors.primary.800}",
      },
    },
    emphasized: {
      value: {
        _light: "{colors.primary.300}",
        _dark: "{colors.primary.700}",
      },
    },
    solid: {
      value: {
        _light: "{colors.primary.700}",
        _dark: "{colors.primary.200}",
      },
    },
    focusRing: {
      value: {
        _light: "{colors.primary.600}",
        _dark: "{colors.primary.600}",
      },
    },
  },
  border: {
    DEFAULT: {
      value: {
        _light: "{colors.gray.300}",
        _dark: "{colors.gray.600}",
      },
    },
    muted: {
      value: {
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    subtle: {
      value: {
        _light: "{colors.gray.50}",
        _dark: "{colors.gray.950}",
      },
    },
    emphasized: {
      value: {
        _light: "{colors.gray.300}",
        _dark: "{colors.gray.700}",
      },
    },
    inverted: {
      value: {
        _light: "{colors.gray.800}",
        _dark: "{colors.gray.200}",
      },
    },
    error: {
      value: {
        _light: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
    warning: {
      value: {
        _light: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
    success: {
      value: {
        _light: "{colors.green.500}",
        _dark: "{colors.green.400}",
      },
    },
    info: {
      value: {
        _light: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },
});
