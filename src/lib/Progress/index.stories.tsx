// Packages
import { faker } from "@faker-js/faker";

// Components
import Progress from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: faker.lorem.word(),
    max: 100,
    value: 0,
  },
};
