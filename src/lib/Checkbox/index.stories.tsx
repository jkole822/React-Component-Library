// Packages
import { faker } from "@faker-js/faker";

// Components
import Checkbox from "./story";

// Types
import { CheckboxValidationStateEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    validationState: {
      control: {
        type: "select",
      },
      options: [
        CheckboxValidationStateEnum.Invalid,
        CheckboxValidationStateEnum.Valid,
      ],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultChecked: false,
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    name: faker.lorem.word(),
  },
};
