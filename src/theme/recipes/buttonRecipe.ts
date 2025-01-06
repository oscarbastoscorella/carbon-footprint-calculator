import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "2rem",
    colorPalette: "primary",
  },
  variants: {
    size: {
      md: {
        h: "10",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
