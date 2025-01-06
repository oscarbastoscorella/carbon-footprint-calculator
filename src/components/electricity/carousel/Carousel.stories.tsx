import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import type { EnergyConsumption } from "@ts-types/electricity";

const meta: Meta<typeof Carousel> = {
  title: "Carbon Calculator/Electricity/Carousel",
  component: Carousel,
  decorators: [
    (Story) => (
      <Box w="75%">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const energyConsumptions: EnergyConsumption[] = [
  {
    id: "1",
    date: "Dec 27, 2024",
    consumption: 15,
  },
  {
    id: "2",
    date: "Dec 28, 2024",
    consumption: 22.1,
  },
  {
    id: "3",
    date: "Dec 29, 2024",
    consumption: 35.87,
  },

  {
    id: "4",
    date: "Dec 30, 2024",
    consumption: 35.87,
  },
  {
    id: "5",
    date: "Dec 31, 2024",
    consumption: 16.12,
  },
  {
    id: "6",
    date: "Jan 01, 2025",
    consumption: 21.66,
  },
  {
    id: "7",
    date: "Jan 02, 2025",
    consumption: 21.66,
  },
  {
    id: "8",
    date: "Jan 03, 2025",
    consumption: 21.66,
  },
  {
    id: "9",
    date: "Jan 04, 2025",
    consumption: 78.66,
  },
  {
    id: "10",
    date: "Jan 05, 2025",
    consumption: 65.61,
  },
];

export const Default: Story = {
  args: { isLoading: false, data: energyConsumptions },
};

export const Loading: Story = {
  args: { isLoading: true },
};
