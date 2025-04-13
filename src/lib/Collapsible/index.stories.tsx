// Packages
import { faker } from "@faker-js/faker";

// Components
import Collapsible from "./story";

// Styles
import { IconStyles } from "../../styles";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonContent = () => (
  <div>
    <span className="mr-2">{faker.lorem.word()}</span>
    <i aria-hidden="true" className={IconStyles}></i>
  </div>
);

export const Basic: Story = {
  args: {
    buttonContent: <ButtonContent />,
    children: <></>,
    defaultOpen: false,
    disabled: false,
  },
};

export const DefaultOpen: Story = {
  args: {
    buttonContent: <ButtonContent />,
    children: <></>,
    defaultOpen: true,
    disabled: false,
  },
};
