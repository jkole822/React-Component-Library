import { Collapsible } from "radix-ui";
import type { ReactNode } from "react";

export interface Props extends Collapsible.CollapsibleProps {
  children: ReactNode;
  className?: string;
  triggerContent: ReactNode;
}
