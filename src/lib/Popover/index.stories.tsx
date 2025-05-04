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
  args: {
    contentProps: {
      sideOffset: 8,
    },
    description: faker.lorem.paragraph(),
    modal: false,
    title: faker.lorem.words(2),
  },
  argTypes: {
    children: {
      description: "Popover content body. Accepts any valid React node.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    contentProps: {
      control: "object",
      description:
        "Additional props passed to the Popover.Content component (e.g., className, side, sideOffset, styles).",
    },
    defaultOpen: {
      control: "boolean",
      description: "The initial open state of the popover when rendered.",
    },
    description: {
      control: "text",
      description: "Optional supporting text shown below the title.",
    },
    modal: {
      control: "boolean",
      description: "Prevents interaction outside the popover while open.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback fired when the open state of the popover changes.",
      table: {
        category: "Events",
      },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the popover.",
    },
    title: {
      control: "text",
      description: "Optional heading or title rendered in the popover.",
    },
    trigger: {
      description:
        "The element that triggers the popover. Can be a button or custom component.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
};
