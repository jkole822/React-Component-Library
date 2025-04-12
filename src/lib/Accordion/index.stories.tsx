// Packages
import { faker } from "@faker-js/faker";

// Components
import Accordion from "./story";

// Styles
import { IconStyles } from "../../styles";

// Types
import {
  AccordionDirectionEnum,
  AccordionEnum,
  AccordionOrientationEnum,
} from "./types";
import { HeadingLevelEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    dir: {
      control: {
        type: "select",
      },
      options: [AccordionDirectionEnum.left, AccordionDirectionEnum.right],
    },
    headingLevel: {
      control: {
        type: "select",
      },
      options: [
        HeadingLevelEnum.One,
        HeadingLevelEnum.Two,
        HeadingLevelEnum.Three,
        HeadingLevelEnum.Four,
        HeadingLevelEnum.Five,
        HeadingLevelEnum.Six,
      ],
    },
    orientation: {
      control: {
        type: "select",
      },
      options: [
        AccordionOrientationEnum.horizontal,
        AccordionOrientationEnum.vertical,
      ],
    },
    type: {
      control: {
        type: "select",
      },
      options: [AccordionEnum.single, AccordionEnum.multiple],
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionContent = () => (
  <>
    <span className="mr-2">{faker.lorem.word()}</span>
    <i aria-hidden="true" className={IconStyles}></i>
  </>
);

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    content: <AccordionContent />,
    description: faker.lorem.sentence(),
    disabled: index === 2,
    id: `item-${index + 1}`,
    title: faker.lorem.words(3),
  }));

export const Single: Story = {
  args: {
    collapsible: false,
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    type: AccordionEnum.single,
  },
};

export const SingleWithDefault: Story = {
  args: {
    collapsible: false,
    defaultValue: "item-1",
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    type: AccordionEnum.single,
  },
};

export const Multiple: Story = {
  args: {
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    type: AccordionEnum.multiple,
  },
};

export const MultipleWithDefault: Story = {
  args: {
    defaultValue: ["item-1", "item-2"],
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    type: AccordionEnum.multiple,
  },
};
