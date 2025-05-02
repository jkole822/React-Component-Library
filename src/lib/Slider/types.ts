import { Slider } from "radix-ui";
import type { ValidationState } from "../../types";

export enum SliderOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type SliderOrientation =
  | SliderOrientationEnum.Horizontal
  | SliderOrientationEnum.Vertical;

export interface Props extends Slider.SliderProps {
  className?: string;
  description?: string;
  errorMessage?: string;
  orientation?: SliderOrientation;
  validationState?: ValidationState;
  withField?: boolean;
}
