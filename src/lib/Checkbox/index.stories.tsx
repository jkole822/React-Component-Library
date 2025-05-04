// Packages
import { faker } from "@faker-js/faker";

// Components
import Checkbox from "./story";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    disabled: false,
    required: false,
    value: "on",
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Renders the component as a child element.",
    },
    checked: {
      control: "boolean",
      description: "The controlled checked state.",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    defaultChecked: {
      control: "boolean",
      description: "The initial checked state when rendered.",
    },
    description: {
      control: "text",
      description: "Field description displayed when `withField` is `true`.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox.",
    },
    errorMessage: {
      control: "text",
      description:
        "Field error message displayed when `withField` is true and `validationState` is `invalid`.",
    },
    name: {
      control: "text",
      description: "Name attribute for form submission.",
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "Callback when the checked state changes.",
      table: {
        category: "Events",
      },
    },
    required: {
      control: "boolean",
      description: "Marks the checkbox as required.",
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "text",
      description: "Value attribute for form submission.",
    },
    withField: {
      control: "boolean",
      description:
          "Use label, description, and error message with validation state.",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  name: faker.lorem.word(),
};

export const Basic: Story = {
  args,
};

export const DefaultChecked: Story = {
  args: {
    ...args,
    defaultChecked: true,
  },
};

export const WithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};
