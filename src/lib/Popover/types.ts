import { Popover } from "radix-ui";
import type { CSSProperties, ReactNode } from "react";

interface ContentProps extends Popover.PopoverContentProps {
  className?: string;
  styles?: CSSProperties;
}

export interface Props extends Popover.PopoverProps {
  children?: ReactNode;
  contentProps?: ContentProps;
  description?: string;
  title?: string;
  trigger?: ReactNode;
}
