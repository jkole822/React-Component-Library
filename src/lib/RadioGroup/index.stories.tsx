// Packages
import { faker } from "@faker-js/faker";

// Components
import RadioGroup from "./story";

// Types
import { RadioGroupOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    items,
    loop: true,
    name: faker.lorem.word(),
    orientation: RadioGroupOrientationEnum.Vertical,
    required: false,
    validationState: ValidationStateEnum.Valid,
    value: "",
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    className: {
      control: "text",
      description:
        "Additional CSS classes to apply to the radio group container.",
    },
    defaultValue: {
      control: "text",
      description: "Default selected value (uncontrolled).",
    },
    description: {
      control: "text",
      description:
        "Optional description text displayed below the radio group label when `withField` is `true`.",
    },
    dir: {
      control: "select",
      description:
        "The reading direction of the radio group. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      options: ["ltr", "rtl"],
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled.",
    },
    errorMessage: {
      control: "text",
      description:
        "Optional error message shown when validation fails when `withField` is `true`.",
    },
    items: {
      control: "object",
      description:
        "Array of string values used to render individual radio items.",
    },
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop from last item to first, and vice versa.",
    },
    name: {
      control: "text",
      description:
        "Name attribute passed to the input elements (used for form submission), and used as label when `withField` is `true`.",
    },
    onValueChange: {
      action: "onValueChange",
      description: "Callback triggered when the selected radio value changes.",
      table: {
        category: "Events",
      },
    },
    orientation: {
      control: "select",
      description: "Layout direction of the radio items.",
      options: [
        RadioGroupOrientationEnum.Horizontal,
        RadioGroupOrientationEnum.Vertical,
      ],
    },
    required: {
      control: "boolean",
      description: "Whether selection is required before form submission.",
    },
    validationState: {
      control: "select",
      description: "Controls the visual state for form validation feedback.",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "text",
      description: "Current selected value (controlled).",
    },
    withField: {
      control: "boolean",
      description:
        "Whether the radio group should be wrapped in a Field component for form styling.",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};

export const Horizontal = {
  args: {
    orientation: RadioGroupOrientationEnum.Horizontal,
  },
};

export const VerticalWithField: Story = {
  args: {
    withField: true,
  },
};

export const HorizontalWithField = {
  args: {
    orientation: RadioGroupOrientationEnum.Horizontal,
    withField: true,
  },
};
