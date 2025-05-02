import { Tooltip } from "radix-ui";

export interface Props extends Tooltip.TooltipProps {
  className?: string;
  contentProps?: Tooltip.TooltipContentProps;
  text: string;
}
