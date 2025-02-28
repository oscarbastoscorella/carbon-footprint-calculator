import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Carbon Calculator/Common/Header/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { title: "Carbon Footprint Calculator" },
};
