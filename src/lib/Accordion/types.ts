import type { HeadingLevels } from "../../types";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export enum AccordionDirectionEnum {
  left = "ltr",
  right = "rtl",
}

export enum AccordionOrientationEnum {
  horizontal = "horizontal",
  vertical = "vertical",
}

export enum AccordionEnum {
  single = "single",
  multiple = "multiple",
}

export type AccordionDirectionType = `${AccordionDirectionEnum}`;

export type AccordionOrientationType = `${AccordionOrientationEnum}`;

export type AccordionType = `${AccordionEnum}`;

export interface AccordionItem {
  id: string;
  content?: ReactNode;
  description?: string;
  disabled?: boolean;
  title: string;
}

export interface Props {
  className?: string;
  collapsible?: boolean;
  defaultValue?: string | string[];
  dir?: AccordionDirectionType;
  disabled?: boolean;
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  orientation?: AccordionOrientationType;
  onValueChange?: Dispatch<SetStateAction<string | string[] | undefined>>;
  type: AccordionType;
  value?: string | string[];
}
