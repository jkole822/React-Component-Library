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
  argTypes: {
    className: { control: "text" },
    validationState: {
      control: "select",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultChecked: false,
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  name: faker.lorem.word(),
  required: false,
  validationState: ValidationStateEnum.Valid,
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
