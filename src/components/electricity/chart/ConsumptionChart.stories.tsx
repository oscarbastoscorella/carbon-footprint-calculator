import type { Meta, StoryObj } from "@storybook/react";

import ConsumptionChart from "./ConsumptionChart";
import { Flex } from "@chakra-ui/react";
import { generateConsumptionData } from "../../../utils";

const meta: Meta<typeof ConsumptionChart> = {
  component: ConsumptionChart,
  title: "Carbon Calculator/Electricity/ConsumptionChart",
  decorators: [
    (Story) => (
      <Flex w="50%">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ConsumptionChart>;

const data = generateConsumptionData(25, 65);

export const Default: Story = {
  args: {
    isLoading: false,
    data,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
