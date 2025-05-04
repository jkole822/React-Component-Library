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
  args: {
    asChild: false,
    label: faker.lorem.word(),
    max: 100,
    value: 0,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Renders the component as a child element.",
    },
    className: {
      control: "text",
      description: "Additional class name(s) applied to the root container.",
    },
    getValueLabel: {
      action: "getValueLabel",
      description:
        "A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value.",
      table: {
        category: "Events",
      },
    },
    label: {
      control: "text",
      description: "Optional sr-only label.",
    },
    max: {
      control: { type: "number", min: 1 },
      description: "The maximum value of the progress bar.",
    },
    value: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "The controlled progress value (0 to 100).",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
