import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface Props {
  buttonContent: ReactNode;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
}
