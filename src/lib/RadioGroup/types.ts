export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export enum RadioGroupValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type RadioGroupValidationState =
  | RadioGroupValidationStateEnum.Invalid
  | RadioGroupValidationStateEnum.Valid;

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
  validationState?: RadioGroupValidationState;
  value: string;
}
