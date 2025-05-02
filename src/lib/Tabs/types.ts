import { Tabs } from "radix-ui";
import type { ReactNode } from "react";

export enum TabsActivationModeEnum {
  Automatic = "automatic",
  Manual = "manual",
}

export type TabsActivationMode =
  | TabsActivationModeEnum.Automatic
  | TabsActivationModeEnum.Manual;

export enum TabsOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type TabsOrientation =
  | TabsOrientationEnum.Horizontal
  | TabsOrientationEnum.Vertical;

export interface TabItem {
  children: ReactNode;
  disabled?: boolean;
  id: string;
  label: string;
}

export interface Props extends Tabs.TabsProps {
  activationMode?: TabsActivationMode;
  className?: string;
  items: TabItem[];
  orientation?: TabsOrientation;
}
