import type { Select } from "radix-ui";
import type { ValidationState } from "../../types";

export interface SelectItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props extends Select.SelectProps {
  className?: string;
  contentProps?: Select.SelectContentProps;
  description?: string;
  errorMessage?: string;
  options: SelectItem[];
  placeholder?: string;
  validationState?: ValidationState;
  withField?: boolean;
}
