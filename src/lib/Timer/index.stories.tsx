// Components
import Timer from ".";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Timer",
  component: Timer,
  tags: ["autodocs"],
  args: {
    interval: 1000,
    separator: "|",
    startMs: 0,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Use the provided child element as the default rendered element, combining their props and behavior.",
    },
    autoStart: {
      control: "boolean",
      description: "Whether the timer should start automatically.",
    },
    className: {
      control: "text",
      description:
        "Whether the timer should countdown, decrementing the timer on each tick.",
    },
    countdown: {
      control: "boolean",
      description: "The unique identifier of the machine.",
    },
    hideDays: {
      control: "boolean",
      description: "Hides the 'days' segment",
    },
    hideHours: {
      control: "boolean",
      description: "Hides the 'hours' segment",
    },
    hideMinutes: {
      control: "boolean",
      description: "Hides the 'minutes' segment",
    },
    hideReset: {
      control: "boolean",
      description: "Hides the 'reset' control",
    },
    hideToggle: {
      control: "boolean",
      description: "Hides the control for 'start', 'resume', and 'pause'.",
    },
    id: {
      control: "text",
      description: "The unique identifier of the machine.",
    },
    interval: {
      control: "number",
      description: "The interval in milliseconds to update the timer count.",
    },
    separator: {
      control: "text",
      description: "Text that displays between the timer segments.",
    },
    startMs: {
      control: "number",
      description: "The total duration of the timer in milliseconds.",
    },
    targetMs: {
      control: "number",
      description: "The minimum count of the timer in milliseconds.",
    },
    onComplete: {
      action: "onComplete",
      description: "Function invoked when the timer is completed.",
      table: {
        category: "Events",
      },
    },
    onTick: {
      action: "onTick",
      description: "Function invoked when the timer ticks.",
      table: {
        category: "Events",
      },
    },
  },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
