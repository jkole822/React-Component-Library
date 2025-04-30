import { Accordion } from "radix-ui";
import type { HeadingLevels } from "../../types";
import type { ReactNode } from "react";

export enum AccordionDirectionEnum {
  Left = "ltr",
  Right = "rtl",
}

export type AccordionDirectionType =
  | AccordionDirectionEnum.Left
  | AccordionDirectionEnum.Right;

export enum AccordionOrientationEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export type AccordionOrientationType =
  | AccordionOrientationEnum.Horizontal
  | AccordionOrientationEnum.Vertical;

export interface AccordionItem {
  id: string;
  content?: ReactNode;
  description?: string;
  disabled?: boolean;
  title: string;
}

export interface SingleProps extends Accordion.AccordionSingleProps {
  className?: string;
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  orientation?: AccordionOrientationType;
}

export interface MultipleProps extends Accordion.AccordionMultipleProps {
  className?: string;
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  orientation?: AccordionOrientationType;
}
