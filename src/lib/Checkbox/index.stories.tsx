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
  argTypes: {
    className: { control: "text" },
    defaultChecked: { control: "boolean" },
    validationState: {
      control: {
        type: "select",
      },
      options: [ValidationStateEnum.Invalid, ValidationStateEnum.Valid],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultChecked: false,
  description: faker.lorem.sentence(),
  disabled: false,
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
