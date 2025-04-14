// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import NumberInput from ".";

// Types
import { NumberInputValidationStateEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    locale: { control: "text" },
    max: { control: "number" },
    min: { control: "number" },
    pattern: { control: "text" },
    validationState: {
      control: "select",
      options: [
        NumberInputValidationStateEnum.Valid,
        NumberInputValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  allowMouseWheel: true,
  allowOverflow: false,
  clampValueOnBlur: true,
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  focusInputOnChange: true,
  id: uuid(),
  name: faker.lorem.word(),
  readOnly: false,
  required: true,
  spinOnPress: true,
  step: 1,
};

export const Basic: Story = {
  args,
};

export const DefaultValue: Story = {
  args: {
    ...args,
    defaultValue: "100",
  },
};

export const WithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};
