import { Pagination } from "@ark-ui/react/pagination";

export interface Props {
  className?: string;
  count: number;
  hideNextButton?: boolean;
  hidePreviousButton?: boolean;
  onPageChange: (details: Pagination.PageChangeDetails) => void;
  onPageSizeChange?: (details: Pagination.PageSizeChangeDetails) => void;
  page: number;
  pageSize: number;
  siblingCount?: number;
}
