// Packages
import { faker } from "@faker-js/faker";

// Components
import Switch from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";
import { ValidationStateEnum } from "../../types";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    asChild: false,
    defaultChecked: false,
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    name: faker.lorem.word(),
    required: false,
    validationState: ValidationStateEnum.Valid,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    checked: {
      control: "boolean",
      description: "Controlled checked state of the switch.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the switch root.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Initial checked state of the switch (uncontrolled).",
    },
    description: {
      control: "text",
      description:
        "Optional description shown below the switch when `withField` is `true`.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the switch.",
    },
    errorMessage: {
      control: "text",
      description:
        "Error message displayed when validation fails and `withField` is `true`.",
    },
    name: {
      control: "text",
      description: "Name attribute for form submission.",
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "Called when the checked state changes.",
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    withField: {
      control: "boolean",
      description:
        "Use label, description, and error message with validation state.",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithField: Story = {
  args: {
    withField: true,
  },
};
