import type { ImageProps } from "../../types";

export enum NavigationMenuOrientationEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export type NavigationMenuOrientation =
  | NavigationMenuOrientationEnum.Horizontal
  | NavigationMenuOrientationEnum.Vertical;

export interface NavigationMenuItem {
  closeOnSelect?: boolean;
  description?: string;
  disabled?: boolean;
  href: string;
  image?: ImageProps;
  onSelect?: () => void;
  title: string;
}

export interface NavigationMenuTrigger {
  disabled?: boolean;
  href?: string;
  items: NavigationMenuItem[];
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  title: string;
}

export interface Props {
  className?: string;
  delayDuration?: number;
  homeHref?: string;
  icon?: ImageProps;
  items: NavigationMenuTrigger[];
  onValueChange?: (value: string) => void;
  orientation?: NavigationMenuOrientation;
  skipDelayDuration: number;
  title?: string;
  value?: string;
}
