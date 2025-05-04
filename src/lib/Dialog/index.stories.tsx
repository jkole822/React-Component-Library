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
  args: {
    description: faker.lorem.paragraph(),
    defaultOpen: false,
    modal: true,
    title: faker.lorem.words(2),
  },
  argTypes: {
    children: {
      description:
        "The React element or content to be rendered inside the component.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the dialog when it is initially rendered.",
    },
    description: {
      control: "text",
      description:
        "The description to be rendered within, and describes, the dialog.",
    },
    modal: {
      control: "boolean",
      description:
        "When true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the dialog changes.",
      table: {
        category: "Events",
      },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the dialog.",
    },
    title: {
      control: "text",
      description: "The title to be rendered within, and labels, the dialog.",
    },
    trigger: {
      description:
        "The React element or content to be rendered as the component trigger.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
};
