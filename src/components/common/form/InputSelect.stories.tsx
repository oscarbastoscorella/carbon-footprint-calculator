import { Flex, createListCollection } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import InputSelect from "../../common/form/InputSelect";
import { fn } from "@storybook/test";

const meta: Meta<typeof InputSelect> = {
  component: InputSelect,
  title: "Carbon Calculator/Electricity/Location/InputSelect",
  decorators: [
    (Story) => (
      <Flex width="300px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

const countries = createListCollection({
  items: [
    { label: "Canada", value: "Canada" },
    { label: "Germany", value: "Germany" },
    { label: "United States", value: "United States" },
    { label: "India", value: "India" },
  ],
});

export const Default: Story = {
  args: {
    label: "Country",
    options: countries,
    placeholder: "Select a country",
    value: ["Germany"],
    onValueChange: fn(),
  },
};
