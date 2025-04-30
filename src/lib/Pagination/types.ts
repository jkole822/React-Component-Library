import { Pagination } from "@ark-ui/react";

export interface Props extends Pagination.RootProps {
  className?: string;
  hideNextButton?: boolean;
  hidePreviousButton?: boolean;
}
