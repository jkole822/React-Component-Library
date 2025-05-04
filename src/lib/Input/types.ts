import { Field } from "@ark-ui/react";
import type { ValidationState } from "../../types";

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

export interface Props extends Field.RootProps {
  autoComplete?: AutoCompleteType;
  className?: string;
  description?: string;
  errorMessage?: string;
  inputProps?: Field.InputProps;
  name?: string;
  type?: InputType;
  validationState?: ValidationState;
}
