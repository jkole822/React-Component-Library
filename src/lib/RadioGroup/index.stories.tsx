// Packages
import { faker } from "@faker-js/faker";

// Components
import RadioGroup from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";
import {
  RadioGroupOrientationEnum,
  RadioGroupValidationStateEnum,
} from "./types";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    orientation: {
      control: "select",
      options: [
        RadioGroupOrientationEnum.Horizontal,
        RadioGroupOrientationEnum.Vertical,
      ],
    },
    validationState: {
      control: "select",
      options: [
        RadioGroupValidationStateEnum.Valid,
        RadioGroupValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const args = {
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  items,
  loop: true,
  name: faker.lorem.word(),
  onValueChange: (value: string) => console.log(value),
  orientation: RadioGroupOrientationEnum.Vertical,
  required: false,
  validationState: RadioGroupValidationStateEnum.Valid,
  value: "",
};

export const Vertical: Story = {
  args,
};

export const Horizontal = {
  args: {
    ...args,
    orientation: RadioGroupOrientationEnum.Horizontal,
  },
};
