import { RadioGroup } from "radix-ui";
import type { ValidationState } from "../../types";

export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export interface Props extends RadioGroup.RadioGroupProps {
  className?: string;
  description?: string;
  errorMessage?: string;
  items: string[];
  orientation?: RadioGroupOrientation;
  validationState?: ValidationState;
  withField?: boolean;
}
