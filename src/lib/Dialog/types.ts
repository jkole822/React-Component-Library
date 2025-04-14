import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface Props {
  children?: ReactNode;
  defaultOpen?: boolean;
  description?: string;
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  modal?: boolean;
  title?: string;
  trigger?: ReactNode;
}
