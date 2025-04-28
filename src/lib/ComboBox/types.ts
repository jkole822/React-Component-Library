import { Combobox } from "@ark-ui/react/combobox";

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

export enum ComboBoxValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type ComboBoxInputBehavior =
  | ComboBoxInputBehaviorEnum.None
  | ComboBoxInputBehaviorEnum.AutoHighlight
  | ComboBoxInputBehaviorEnum.AutoComplete;

export type ComboBoxSelectionBehavior =
  | ComboBoxSelectionBehaviorEnum.Replace
  | ComboBoxSelectionBehaviorEnum.Clear
  | ComboBoxSelectionBehaviorEnum.Preserve;

export type ComboBoxValidationState =
  | ComboBoxValidationStateEnum.Valid
  | ComboBoxValidationStateEnum.Invalid;

export interface ComboBoxItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props {
  allowCustomValue?: boolean;
  asChild?: boolean;
  autoFocus?: boolean;
  className?: string;
  closeOnSelect?: boolean;
  composite?: boolean;
  defaultHighlightedValue?: string;
  defaultInputValue?: string;
  defaultOpen?: boolean;
  defaultValue?: string[];
  description?: string;
  disabled?: boolean;
  disableLayer?: boolean;
  errorMessage?: string;
  form?: string;
  id?: string;
  immediate?: boolean;
  items: ComboBoxItem[];
  inputBehavior?: ComboBoxInputBehavior;
  inputValue?: string;
  lazyMount?: boolean;
  loopFocus?: boolean;
  multiple?: boolean;
  name?: string;
  navigate?: (details: any) => void;
  onExitComplete?: () => void;
  onFocusOutside?: (event: any) => void;
  onHighlightChange?: (details: Combobox.HighlightChangeDetails) => void;
  onInteractOutside?: (event: any) => void;
  onOpenChange?: (details: Combobox.OpenChangeDetails) => void;
  onPointerDownOutside?: (event: any) => void;
  onRemoveItem?: (value: string) => void;
  onValueChange?: (details: Combobox.ValueChangeDetails) => void;
  open?: boolean;
  openOnChange?:
    | boolean
    | ((details: Combobox.InputValueChangeDetails) => boolean);
  openOnClick?: boolean;
  openOnKeyPress?: boolean;
  placeholder?: string;
  positioning?: any;
  present?: boolean;
  readOnly?: boolean;
  required?: boolean;
  scrollToIndexFn?: (details: any) => void;
  selectionBehavior?: ComboBoxSelectionBehavior;
  skipAnimationOnMount?: boolean;
  unmountOnExit?: boolean;
  validationState?: ComboBoxValidationState;
  value?: string[];
  withField?: boolean;
}
