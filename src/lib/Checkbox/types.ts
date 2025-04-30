import { Checkbox } from "radix-ui";
import type { ValidationState } from "../../types";

export interface Props extends Checkbox.CheckboxProps {
  className?: string;
  description?: string;
  errorMessage?: string;
  validationState?: ValidationState;
  withField?: boolean;
}
