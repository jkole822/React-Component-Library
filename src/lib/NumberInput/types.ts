import { NumberInput } from "@ark-ui/react/number-input";
import type { ValidationState } from "../../types";

export interface Props extends NumberInput.RootProps {
  className?: string;
  description?: string;
  errorMessage?: string;
  validationState?: ValidationState;
  withField?: boolean;
}
