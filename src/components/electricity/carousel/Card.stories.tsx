import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import type { EnergyConsumption } from "@ts-types/electricity";
import { Flex } from "@chakra-ui/react";

const meta: Meta<typeof Card> = {
  title: "Carbon Calculator/Electricity/Carousel/Card",
  component: Card,
  decorators: [
    (Story) => (
      <Flex w="235px" h="135px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

const energyConsumption: EnergyConsumption = {
  id: "1",
  date: "Dec 27, 2024",
  consumption: 15.52,
};

export const Default: Story = {
  args: {
    energyConsumption,
  },
};
