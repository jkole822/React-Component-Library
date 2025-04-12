import type { ReactNode } from "react";

export enum ButtonVariantsEnum {
  fill = "fill",
  lineOne = "lineOne",
  lineTwo = "lineTwo",
  outline = "outline",
}

export type ButtonVariants =
  | ButtonVariantsEnum.fill
  | ButtonVariantsEnum.lineOne
  | ButtonVariantsEnum.lineTwo
  | ButtonVariantsEnum.outline;

export interface Props {
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaHaspopup?:
  | boolean
  | "dialog"
  | "menu"
  | "grid"
  | "listbox"
  | "tree"
  | "false"
  | "true"
  | undefined;
  ariaHidden?: boolean;
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  id?: string;
  onClick?: () => void;
  showBottomGlow?: boolean;
  tabIndex?: number;
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariants;
}
