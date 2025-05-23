// Components
import Toast from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
