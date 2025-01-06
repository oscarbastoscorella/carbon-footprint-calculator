import { Flex, IconButton } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { GoGear } from "react-icons/go";
import Section from "./Section";

const meta: Meta<typeof Section> = {
  title: "Carbon Calculator/Common/Section",
  component: Section,
  decorators: [
    (Story) => (
      <Flex w="600px" h="300px">
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {},
};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <Section.Header heading="Section Header" />
        <Section.Content>Hi! This is content</Section.Content>
      </>
    ),
  },
};

export const WithActionElement: Story = {
  args: {
    children: (
      <>
        <Section.Header
          heading="Section Header"
          ActionElement={() => (
            <IconButton variant={"ghost"} aria-label="Settings" size={"sm"}>
              <GoGear />
            </IconButton>
          )}
        />
        <Section.Content>Hi! This is content</Section.Content>
      </>
    ),
  },
};
