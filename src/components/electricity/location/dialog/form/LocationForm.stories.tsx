import { Flex, createListCollection } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import LocationForm from "./LocationForm";
import { fn } from "@storybook/test";

const meta: Meta<typeof LocationForm> = {
  component: LocationForm,
  title: "Carbon Calculator/Electricity/Location/LocationForm",
  decorators: [
    (Story) => (
      <Flex w="500px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LocationForm>;

const countries = createListCollection({
  items: [{ label: "United States", value: "United States" }],
});

const states = createListCollection({
  items: [
    { label: "California", value: "California" },
    { label: "Florida", value: "Florida" },
    { label: "New York", value: "New York" },
  ],
});

export const Default: Story = {
  args: {
    countries: countries,
    states: states,
    onSubmit: fn(),
    onClose: fn(),
  },
};
