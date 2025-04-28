// Packages
import { Pagination as ArkPagination } from "@ark-ui/react/pagination";

// Components
import Pagination from "./story";

// Types
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  count: 100,
  hideNextButton: false,
  hidePreviousButton: false,
  onPageChange: (details: ArkPagination.PageChangeDetails) => {
    console.log("Page Change: ", details);
  },
  onPageSizeChange: (details: ArkPagination.PageSizeChangeDetails) => {
    console.log("Page Size Change: ", details);
  },
  page: 1,
  pageSize: 10,
  siblingCount: 1,
};

export const Basic: Story = {
  args,
};

export const HiddenPreviousNextButtons: Story = {
  args: {
    ...args,
    hideNextButton: true,
    hidePreviousButton: true,
    siblingCount: 3,
  },
};
