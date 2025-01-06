import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@chakra-ui/react";
import { FootprintLocation } from "@ts-types/electricity";
import Location from "./Location";

const meta: Meta<typeof Location> = {
  component: Location,
  title: "Carbon Calculator/Electricity/Location",
  decorators: [
    (Story) => (
      <Flex w="500px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Location>;

const location: FootprintLocation = {
  id: "story-1",
  country: "United States",
  state: "California",
};
export const Default: Story = {
  args: {
    isLoading: false,
    location,
  },
};

export const Loading: Story = {
  args: {
    location,
    isLoading: true,
  },
};
