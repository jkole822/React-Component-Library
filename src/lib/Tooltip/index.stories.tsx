// Packages
import { faker } from "@faker-js/faker";

// Components
import Tooltip from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    text: { control: "text" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: faker.lorem.sentence(),
  },
};
