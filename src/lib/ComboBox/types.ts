import { Combobox } from "@ark-ui/react/combobox";
import { ValidationState } from "../../types";

export enum ComboBoxInputBehaviorEnum {
  None = "none",
  AutoHighlight = "autohighlight",
  AutoComplete = "autocomplete",
}

export enum ComboBoxSelectionBehaviorEnum {
  Replace = "replace",
  Clear = "clear",
  Preserve = "preserve",
}

export type ComboBoxInputBehavior =
  | ComboBoxInputBehaviorEnum.None
  | ComboBoxInputBehaviorEnum.AutoHighlight
  | ComboBoxInputBehaviorEnum.AutoComplete;

export type ComboBoxSelectionBehavior =
  | ComboBoxSelectionBehaviorEnum.Replace
  | ComboBoxSelectionBehaviorEnum.Clear
  | ComboBoxSelectionBehaviorEnum.Preserve;

export interface ComboBoxItem {
  id: string;
  description: string;
  disabled: boolean;
  label: string;
  value: string;
}

export interface Props extends Combobox.RootProps<ComboBoxItem> {
  className?: string;
  description?: string;
  errorMessage?: string;
  items: ComboBoxItem[];
  inputBehavior?: ComboBoxInputBehavior;
  onRemoveItem?: (value: string) => void;
  selectionBehavior?: ComboBoxSelectionBehavior;
  validationState?: ValidationState;
  withField?: boolean;
}
