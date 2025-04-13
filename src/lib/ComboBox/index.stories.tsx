// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import ComboBox from "./story";

// Types
import {
  ComboBoxInputBehaviorEnum,
  ComboBoxSelectionBehaviorEnum,
  ComboBoxValidationStateEnum,
} from "./types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
  argTypes: {
    selectionBehavior: {
      control: "select",
      options: [
        ComboBoxSelectionBehaviorEnum.Replace,
        ComboBoxSelectionBehaviorEnum.Clear,
        ComboBoxSelectionBehaviorEnum.Preserve,
      ],
    },
    inputBehavior: {
      control: "select",
      options: [
        ComboBoxInputBehaviorEnum.None,
        ComboBoxInputBehaviorEnum.AutoHighlight,
        ComboBoxInputBehaviorEnum.AutoComplete,
      ],
    },
    validationState: {
      control: "select",
      options: [
        ComboBoxValidationStateEnum.Valid,
        ComboBoxValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof ComboBox>;

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
  items: generateItems(10),
  name: faker.lorem.word(),
  placeholder: faker.lorem.words(2),
};

export const Single: Story = {
  args,
};

export const Multiple: Story = {
  args: {
    ...args,
    inputBehavior: ComboBoxInputBehaviorEnum.AutoHighlight,
    multiple: true,
  },
};

export const SingleWithField: Story = {
  args: {
    ...args,
    description: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    withField: true,
  },
};

export const MultipleWithField: Story = {
  args: {
    ...args,
    description: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    inputBehavior: ComboBoxInputBehaviorEnum.AutoHighlight,
    multiple: true,
    withField: true,
  },
};
