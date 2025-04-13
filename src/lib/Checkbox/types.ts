import type { Dispatch, SetStateAction } from "react";

export enum CheckboxValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type CheckboxValidationState =
  | CheckboxValidationStateEnum.Invalid
  | CheckboxValidationStateEnum.Valid;

export interface Props {
  checked?: boolean | "indeterminate";
  className?: string;
  defaultChecked?: boolean | "indeterminate";
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  name: string;
  onCheckedChange?: Dispatch<SetStateAction<boolean | "indeterminate">>;
  validationState?: CheckboxValidationState;
  value?: string;
}
