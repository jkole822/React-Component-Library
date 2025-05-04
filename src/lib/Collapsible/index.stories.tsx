// Packages
import { faker } from "@faker-js/faker";

// Components
import Collapsible from "./story";

// Styles
import { IconStyles } from "../../styles";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const TriggerContent = () => (
  <div>
    <span className="mr-2">{faker.lorem.word()}</span>
    <i aria-hidden="true" className={IconStyles}></i>
  </div>
);

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  args: {
    children: <></>,
    defaultOpen: false,
    disabled: false,
    triggerContent: <TriggerContent />,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Renders the component as a child element.",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    children: {
      description: "The React element or content to be rendered inside the component.",
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "The initial open state when rendered.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the collapsible component.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback when the open state changes.",
      table: {
        category: "Events",
      },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the collapsible.",
    },
    triggerContent: {
      description: "The React element or content to be rendered within trigger for the component.",
      table: {
        type: { summary: 'ReactNode' },
      },
    }
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
};
