// Packages
import { faker } from "@faker-js/faker";

// Components
import Popover from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  contentProps: {
    sideOffset: 8,
  },
  description: faker.lorem.paragraph(),
  modal: false,
  title: faker.lorem.words(2),
};

export const Basic: Story = {
  args,
};
