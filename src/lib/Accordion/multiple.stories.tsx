// Packages
import { faker } from "@faker-js/faker";

// Components
import { MultipleAccordionStory } from "./story";

// Styles
import { IconStyles } from "../../styles";

// Types
import { AccordionDirectionEnum, AccordionOrientationEnum } from "./types";
import { HeadingLevelEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Accordion - Multiple",
  component: MultipleAccordionStory,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    dir: {
      control: {
        type: "select",
      },
      options: [AccordionDirectionEnum.Left, AccordionDirectionEnum.Right],
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
        AccordionOrientationEnum.Horizontal,
        AccordionOrientationEnum.Vertical,
      ],
    },
  },
} satisfies Meta<typeof MultipleAccordionStory>;

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

const args = {
  headingLevel: HeadingLevelEnum.Three,
  items: generateItems(5),
  type: "multiple" as const,
};

export const Basic: Story = {
  args,
};

export const WithDefaultValues: Story = {
  args: {
    ...args,
    defaultValue: ["item-1", "item-2"],
  },
};
