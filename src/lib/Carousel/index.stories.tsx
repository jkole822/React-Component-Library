// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Carousel from ".";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const generateItems = (length: number) =>
  Array.from({ length }).map(() => ({
    cta: {
      href: "#",
      target: "_self" as const,
      title: faker.lorem.word(),
    },
    description: faker.lorem.sentence(),
    id: uuid(),
    image: {
      alt: faker.lorem.words(2),
      src: faker.image.url({ height: 900, width: 1200 }),
    },
    title: faker.lorem.words(3),
  }));

const meta = {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    items: generateItems(10),
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    items: {
      control: "object",
      description: "The collection of carousel items.",
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const FullScreenHeight: Story = {
  args: {
    className: "h-screen",
  },
};
