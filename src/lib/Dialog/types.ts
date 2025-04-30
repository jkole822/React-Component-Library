import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

export interface Props extends Dialog.DialogProps {
  children?: ReactNode;
  description?: string;
  title?: string;
  trigger?: ReactNode;
}
