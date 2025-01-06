import type { Meta, StoryObj } from "@storybook/react";

import Dock from "./Dock";

const meta: Meta<typeof Dock> = {
  component: Dock,
  title: "Carbon Calculator/Common/Dock",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Dock>;

export const Default: Story = {
  args: {},
};
