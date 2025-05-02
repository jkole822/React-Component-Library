import { Switch } from "radix-ui";
import { ValidationState } from "../../types";

export interface Props extends Switch.SwitchProps {
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  validationState: ValidationState;
  withField?: boolean;
}
