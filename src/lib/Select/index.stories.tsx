// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Select from "./story";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    validationState: {
      control: "select",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    id: uuid(),
    label: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    disabled: index === 2,
  }));

const args = {
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  name: faker.lorem.word(),
  options: generateItems(10),
  placeholder: faker.lorem.words(2),
  required: true,
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
