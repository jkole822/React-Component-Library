import type { Dispatch, SetStateAction } from "react";
import type { ValidationState } from "../../types";

export interface Props {
  checked?: boolean | "indeterminate";
  className?: string;
  defaultChecked?: boolean | "indeterminate";
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  name: string;
  onCheckedChange?: Dispatch<SetStateAction<boolean | "indeterminate">>;
  validationState?: ValidationState;
}
