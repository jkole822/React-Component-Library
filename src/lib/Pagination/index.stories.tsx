// Components
import Pagination from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    defaultPage: 1,
    defaultPageSize: 10,
    siblingCount: 1,
    type: "button"
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Use a custom child element as the rendered component.",
    },
    count: {
      control: "number",
      description: "Total number of data items.",
    },
    defaultPage: {
      control: "number",
      description: "Initial active page when rendered.",
    },
    defaultPageSize: {
      control: "number",
      description: "Initial number of items per page when rendered.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "Text direction of the pagination component.",
    },
    hideNextButton: {
      control: "boolean",
      description: "Hide the next page button."
    },
    hidePreviousButton: {
      control: "boolean",
      description: "Hide the previous page button."
    },
    ids: {
      control: "object",
      description: "Custom IDs for internal elements.",
    },
    page: {
      control: "number",
      description: "Controlled current page.",
    },
    pageSize: {
      control: "number",
      description: "Controlled number of items per page.",
    },
    siblingCount: {
      control: "number",
      description:
        "Number of sibling pages to display around the current page.",
    },
    translations: {
      control: "object",
      description: "Localized strings for accessibility.",
    },
    onPageChange: {
      action: "onPageChange",
      description: "Callback when the page number changes.",
      table: {
        category: "Events",
      },
    },
    onPageSizeChange: {
      action: "onPageSizeChange",
      description: "Callback when the page size changes.",
      table: {
        category: "Events",
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  count: 100,
  hideNextButton: false,
  hidePreviousButton: false,
};

export const Basic: Story = {
  args,
};

export const HiddenPreviousNextButtons: Story = {
  args: {
    ...args,
    hideNextButton: true,
    hidePreviousButton: true,
  },
};
