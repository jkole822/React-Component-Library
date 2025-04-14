import { NumberInput } from "@ark-ui/react/number-input";

export enum NumberInputValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type NumberInputValidationState =
  | NumberInputValidationStateEnum.Invalid
  | NumberInputValidationStateEnum.Valid;

export interface Props {
  allowMouseWheel?: boolean;
  allowOverflow?: boolean;
  asChild?: boolean;
  clampValueOnBlur?: boolean;
  className?: string;
  defaultValue?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  focusInputOnChange?: boolean;
  form?: string;
  id?: string;
  locale?: string;
  max?: number;
  min?: number;
  name?: string;
  onFocusChange?: (details: NumberInput.FocusChangeDetails) => void;
  onValueChange?: (value: NumberInput.ValueChangeDetails) => void;
  onValueInvalid?: (details: NumberInput.ValueInvalidDetails) => void;
  pattern?: string;
  readOnly?: boolean;
  required?: boolean;
  spinOnPress?: boolean;
  step?: number;
  validationState?: NumberInputValidationState;
  value?: string;
  withField?: boolean;
}
