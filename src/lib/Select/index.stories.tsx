// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Select from "./story";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    id: uuid(),
    label: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    disabled: index === 2,
  }));

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    name: faker.lorem.word(),
    options: generateItems(10),
    placeholder: faker.lorem.words(2),
    required: true,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the Select container.",
    },
    contentProps: {
      control: "object",
      description:
        "Props passed to the internal Select.Content component (i.e. `align`, `position`, `side`, etc.)",
    },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state of the dropdown (uncontrolled).",
    },
    defaultValue: {
      control: "text",
      description: "Initial selected value (uncontrolled).",
    },
    description: {
      control: "text",
      description:
        "Optional description shown below the select label when `withField` is `true.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the select component.",
    },
    dir: {
      control: "select",
      description:
        "The reading direction of the select. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      options: ["ltr", "rtl"],
    },
    errorMessage: {
      control: "text",
      description:
        "Error message to display when validation fails when `withField` is `true.",
    },
    name: {
      control: "text",
      description:
        "Name attribute used for form submission, and assigned to the label when `withField` is `true`.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Called when the open state changes.",
      table: {
        category: "Events",
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Fires when a new value is selected.",
      table: {
        category: "Events",
      },
    },
    open: {
      control: "boolean",
      description: "Controls the open state of the dropdown (controlled).",
    },
    options: {
      control: "object",
      description: "Array of items to render in the select dropdown.",
    },
    placeholder: {
      control: "text",
      description: "Text displayed when no option is selected.",
    },
    required: {
      control: "boolean",
      description: "Marks the field as required for form validation.",
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "text",
      description: "Currently selected value (controlled).",
    },
    withField: {
      control: "boolean",
      description: "Wraps the select in a form field layout for styling.",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithField: Story = {
  args: {
    withField: true,
  },
};
