import type { ValidationState } from "../../types";

export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export interface Props {
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  items: string[];
  loop?: boolean;
  name: string;
  onValueChange: (value: string) => void;
  orientation?: RadioGroupOrientation;
  required?: boolean;
  validationState?: ValidationState;
  value: string;
  withField?: boolean;
}
