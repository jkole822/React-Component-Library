import { Collapsible } from "radix-ui";
import type { ReactNode } from "react";

export interface Props extends Collapsible.CollapsibleProps {
  buttonContent: ReactNode;
  children: ReactNode;
  className?: string;
}
