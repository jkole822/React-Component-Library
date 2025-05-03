// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { fn } from "@storybook/test";

// Components
import Button from ".";

// Styles
import { IconStyles } from "../../styles";

// Types
import { ButtonVariantsEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ariaControls: { control: "text" },
    ariaExpanded: { control: "boolean" },
    ariaHaspopup: {
      control: "select",
      options: [
        undefined,
        true,
        false,
        "dialog",
        "menu",
        "grid",
        "listbox",
        "tree",
        "false",
        "true",
      ],
    },
    ariaHidden: { control: "boolean" },
    ariaLabel: { control: "text" },
    className: { control: "text" },
    href: { control: "text" },
    showBottomGlow: { control: "boolean" },
    tabIndex: {
      control: "select",
      options: [undefined, 0, -1],
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top", "framename"],
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        ButtonVariantsEnum.fill,
        ButtonVariantsEnum.outline,
        ButtonVariantsEnum.lineOne,
        ButtonVariantsEnum.lineTwo,
      ],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonContent = () => (
  <>
    <span className="mr-2">{faker.lorem.word()}</span>
    <i aria-hidden="true" className={IconStyles}></i>
  </>
);

const args = {
  disabled: false,
  id: uuid(),
  variant: ButtonVariantsEnum.fill,
};

export const Fill: Story = {
  args,
  render(args) {
    return (
      <Button {...args}>
        <ButtonContent />
      </Button>
    );
  },
};

export const Outline: Story = {
  args: {
    ...args,
    variant: ButtonVariantsEnum.outline,
  },
  render(args) {
    return (
      <Button {...args}>
        <ButtonContent />
      </Button>
    );
  },
};

export const LineOne: Story = {
  args: {
    ...args,
    href: "https://react.dev/",
    target: "_self",
    variant: ButtonVariantsEnum.lineOne,
  },
  render(args) {
    return (
      <Button {...args}>
        <ButtonContent />
      </Button>
    );
  },
};

export const LineTwo: Story = {
  args: {
    ...args,
    href: "https://react.dev/",
    target: "_blank",
    variant: ButtonVariantsEnum.lineTwo,
  },
  render(args) {
    return (
      <Button {...args}>
        <ButtonContent />
      </Button>
    );
  },
};
