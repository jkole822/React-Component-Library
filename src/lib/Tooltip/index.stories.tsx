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
  args: {
    delayDuration: 700,
    contentProps: {
      align: "center",
      alignOffset: 0,
      arrowPadding: 0,
      asChild: false,
      avoidCollisions: true,
      collisionBoundary: [],
      collisionPadding: 0,
      hideWhenDetached: false,
      side: "top",
      sideOffset: 0,
      sticky: "partial",
    },
    text: faker.lorem.sentence(),
  },
  argTypes: {
    className: {
      control: "text",
      description:
        "Additional CSS classes to apply to the tooltip root container.",
    },
    contentProps: {
      control: "object",
      description:
        "Props passed through to the internal Tooltip.Content component (e.g. `side`, `align`, `sideOffset`, etc.).",
    },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state of the tooltip (uncontrolled).",
    },
    delayDuration: {
      control: "number",
      description:
        "Delay in milliseconds before showing the tooltip when opening.",
    },
    disableHoverableContent: {
      control: "boolean",
      description:
        "When true, hovering the tooltip content will not keep it open.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Called when the open state of the tooltip changes.",
      table: {
        category: "Events",
      },
    },
    open: {
      control: "boolean",
      description: "Controls the open state of the tooltip (controlled).",
    },
    text: {
      control: "text",
      description: "The text content to display inside the tooltip.",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
