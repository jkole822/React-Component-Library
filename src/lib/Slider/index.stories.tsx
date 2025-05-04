// Packages
import { faker } from "@faker-js/faker";

// Components
import Slider from "./story";

// Types
import { ValidationStateEnum } from "../../types";
import { SliderOrientationEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    description: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    inverted: false,
    max: 100,
    min: 0,
    minStepsBetweenThumbs: 0,
    name: faker.lorem.word(),
    orientation: SliderOrientationEnum.Horizontal,
    step: 1,
    validationState: ValidationStateEnum.Valid,
    value: [0],
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the slider root.",
    },
    defaultValue: {
      control: "object",
      description: "Initial value(s) of the slider (uncontrolled).",
    },
    description: {
      control: "text",
      description: "Optional description shown below the slider label when `withField` is `true`.",
    },
    dir: {
      control: "select",
      description:
        "The reading direction of the slider. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      options: ["ltr", "rtl"],
    },
    disabled: {
      control: "boolean",
      description: "Disables the slider.",
    },
    errorMessage: {
      control: "text",
      description: "Error message displayed when validation fails and `withField` is `true`.",
    },
    form: {
      control: "text",
      description:
        "The ID of the form that the slider belongs to. If omitted, the slider will be associated with a parent form if one exists.",
    },
    inverted: {
      control: "boolean",
      description: "Whether the slider is visually inverted.",
    },
    max: {
      control: "number",
      description: "Maximum value of the slider.",
    },
    min: {
      control: "number",
      description: "Minimum value of the slider.",
    },
    minStepsBetweenThumbs: {
      control: "number",
      description: "Minimum number of steps allowed between thumbs.",
    },
    name: {
      control: "text",
      description: "Name attribute for form submission.",
    },
    onValueChange: {
      action: "onValueChange",
      description: "Called when the slider value changes.",
      table: {
        category: "Events"
      }
    },
    onValueCommit: {
      action: "onValueCommit",
      description: "Called when the slider value change is committed.",
      table: {
        category: "Events"
      }
    },
    orientation: {
      control: "select",
      description: "Layout direction of the slider.",
      options: [
        SliderOrientationEnum.Horizontal,
        SliderOrientationEnum.Vertical,
      ],
    },
    step: {
      control: "number",
      description: "Step interval of the slider.",
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "object",
      description: "Current value(s) of the slider (controlled).",
    },
    withField: {
      control: "boolean",
      description: "Wraps the slider in a form field layout for styling.",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Vertical: Story = {
  args: {
    orientation: SliderOrientationEnum.Vertical,
  },
};

export const MultiValue: Story = {
  args: {
    defaultValue: [25, 75],
    value: [25, 75],
  },
};

export const WithField: Story = {
  args: {
    withField: true,
  },
};
