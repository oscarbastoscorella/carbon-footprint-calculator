import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@chakra-ui/react";
import { FootprintSummary } from "@ts-types/electricity";
import Summary from "./Summary";

const meta: Meta<typeof Summary> = {
  title: "Carbon Calculator/Electricity/Summary",
  component: Summary,
  decorators: [
    (Story) => (
      <Flex w="600px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Summary>;

const footprintSummary: FootprintSummary = {
  id: "summary-1",
  consumption: 210.18,
  average: 1203.86,
  emissions: 8427,
};

export const Default: Story = {
  args: {
    isLoading: false,
    footprintSummary,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
