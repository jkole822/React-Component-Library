// Packages
import { faker } from "@faker-js/faker";

// Components
import NumberInput from "./story";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  args: {
    allowOverflow: true,
    clampValueOnBlur: true,
    focusInputOnChange: true,
    inputMode: "decimal",
    locale: "en-US",
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    pattern: "[0-9]*(.[0-9]+)?",
    spinOnPress: true,
    step: 1,
  },
  argTypes: {
    allowMouseWheel: {
      control: "boolean",
      description: "Enable changing the value using the mouse wheel.",
    },
    allowOverflow: {
      control: "boolean",
      description: "Allow the value to exceed the min/max range.",
    },
    asChild: {
      control: "boolean",
      description: "Use a custom child element as the rendered component.",
    },
    clampValueOnBlur: {
      control: "boolean",
      description: "Clamp the value within min/max when the input loses focus.",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    defaultValue: {
      control: "text",
      description: "Initial value of the input when rendered.",
    },
    description: {
      control: "text",
      description: "Field description displayed when `withField` is `true`.",
    },
    disabled: {
      control: "boolean",
      description: "Disable the number input.",
    },
    errorMessage: {
      control: "text",
      description:
        "Field error message displayed when `withField` is true and `validationState` is `invalid`.",
    },
    focusInputOnChange: {
      control: "boolean",
      description: "Focus the input when the value changes.",
    },
    form: {
      control: "text",
      description: "Associate the input with a form.",
    },
    formatOptions: {
      control: "object",
      description: "Options for Intl.NumberFormat to format the value.",
    },
    id: {
      control: "text",
      description: "Unique identifier for the component.",
    },
    ids: {
      control: "object",
      description: "Custom IDs for internal elements.",
    },
    inputMode: {
      control: "select",
      options: ["decimal", "numeric", "text", "tel", "search", "email", "url"],
      description:
        "Hints at the type of data that might be entered by the user.",
    },
    invalid: {
      control: "boolean",
      description: "Mark the input as invalid.",
    },
    locale: {
      control: "text",
      description: "Locale for number formatting.",
    },
    max: {
      control: "number",
      description: "Maximum value allowed.",
    },
    min: {
      control: "number",
      description: "Minimum value allowed.",
    },
    name: {
      control: "text",
      description: "Name attribute for form submission.",
    },
    pattern: {
      control: "text",
      description: "Pattern for validating the input value.",
    },
    readOnly: {
      control: "boolean",
      description: "Make the input read-only.",
    },
    required: {
      control: "boolean",
      description: "Mark the input as required.",
    },
    spinOnPress: {
      control: "boolean",
      description:
        "Enable spinning the value when increment/decrement is pressed.",
    },
    step: {
      control: "number",
      description: "Step value for increment/decrement.",
    },
    translations: {
      control: "object",
      description: "Localized strings for accessibility.",
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "text",
      description: "Controlled value of the input.",
    },
    withField: {
      control: "boolean",
      description:
        "Use label, description, and error message with validation state.",
    },
    onFocusChange: {
      action: "onFocusChange",
      description: "Callback when the input gains or loses focus.",
      table: {
        category: "Events",
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Callback when the value changes.",
      table: {
        category: "Events",
      },
    },
    onValueInvalid: {
      action: "onValueInvalid",
      description: "Callback when the value is invalid.",
      table: {
        category: "Events",
      },
    },
  },
} satisfies Meta<typeof NumberInput>;

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

export const WithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};
