import type { Meta, StoryObj } from "@storybook/react";

import AddEnergyForm from "./AddEnergyForm";
import { Flex } from "@chakra-ui/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof AddEnergyForm> = {
  component: AddEnergyForm,
  title: "Carbon Calculator/Electricity/Energy/AddEnergyForm",
  args: {
    onClose: fn(),
    onSubmit: fn(),
  },
  decorators: [
    (Story) => (
      <Flex w="350px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddEnergyForm>;

export const Default: Story = {
  args: {},
};
