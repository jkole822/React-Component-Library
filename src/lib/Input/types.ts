import type { Dispatch, SetStateAction } from "react";

export enum AutoCompleteEnum {
  name = "name",
  email = "email",
  currentPassword = "current-password",
  newPassword = "new-password",
  off = "off",
  username = "username",
}

export type AutoCompleteType =
  | AutoCompleteEnum.name
  | AutoCompleteEnum.email
  | AutoCompleteEnum.currentPassword
  | AutoCompleteEnum.newPassword
  | AutoCompleteEnum.off
  | AutoCompleteEnum.username;

export enum InputTypeEnum {
  date = "date",
  email = "email",
  password = "password",
  text = "text",
}

export type InputType =
  | InputTypeEnum.date
  | InputTypeEnum.email
  | InputTypeEnum.password
  | InputTypeEnum.text;

export enum InputValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type InputValidationState =
  | InputValidationStateEnum.Invalid
  | InputValidationStateEnum.Valid;

export interface Props {
  autoComplete?: AutoCompleteType;
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  id?: string;
  inputClass?: string;
  name?: string;
  maxLength?: number;
  minLength?: number;
  onChange?: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: InputType;
  validationState?: InputValidationState;
  value?: string;
}
