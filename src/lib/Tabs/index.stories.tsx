// Components
import Tabs from "./story";

// Types
import { TabsActivationModeEnum, TabsOrientationEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    activationMode: TabsActivationModeEnum.Automatic,
    items: [],
    orientation: TabsOrientationEnum.Horizontal,
  },
  argTypes: {
    activationMode: {
      control: "radio",
      options: Object.values(TabsActivationModeEnum),
      description:
        "Determines whether tabs switch automatically when focused or manually on activation.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the tabs container.",
    },
    defaultValue: {
      control: "text",
      description: "Initial selected tab value (uncontrolled).",
    },
    dir: {
      control: "select",
      description:
        "The reading direction of the tabs. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      options: ["ltr", "rtl"],
    },
    items: {
      control: "object",
      description:
        "Array of tab items to render, each with id, label, children, and optional disabled flag.",
    },
    onValueChange: {
      action: "onValueChange",
      description: "Called when the active tab changes.",
      table: {
        category: "Events",
      },
    },
    orientation: {
      control: "radio",
      options: Object.values(TabsOrientationEnum),
      description: "Layout direction of tabs.",
    },
    value: {
      control: "text",
      description: "Currently active tab value (controlled).",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
  },
};

export const Vertical: Story = {
  args: {
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
    orientation: TabsOrientationEnum.Vertical,
  },
};
