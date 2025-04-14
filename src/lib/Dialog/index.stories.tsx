// Packages
import { faker } from "@faker-js/faker";

// Components
import Dialog from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  description: faker.lorem.paragraph(),
  defaultOpen: false,
  modal: true,
  title: faker.lorem.words(2),
};

export const Basic: Story = {
  args,
};

export const DefaultOpen: Story = {
  args: {
    ...args,
    defaultOpen: true,
  },
};
