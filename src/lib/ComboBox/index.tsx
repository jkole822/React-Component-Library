// Packages
import {
  Combobox as ArkComboBox,
  createListCollection,
  useCombobox,
} from "@ark-ui/react/combobox";
import { Field } from "@ark-ui/react/field";
import { Portal } from "@ark-ui/react/portal";
import { useMemo, useState } from "react";

// Styles
import {
  ClearTriggerIconStyles,
  ClearTriggerStyles,
  ContentStyles,
  ControlStyles,
  InputStyles,
  ItemDescriptionStyles,
  ItemIndicatorStyles,
  ItemLabelStyles,
  ItemStyles,
  ItemTextStyles,
  LabelStyles,
  PillCloseButtonStyles,
  PillContainerStyles,
  PillStyles,
  TriggerStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

function ComboBoxRoot({
  className = "",
  items: initialItems,
  multiple,
  name,
  onRemoveItem,
  value,
  ...rest
}: Props) {
  const [items, setItems] = useState(initialItems);

  const collection = useMemo(
    () =>
      createListCollection({
        items: items.map((item) => ({ ...item, value: item.id })),
      }),
    [items],
  );

  const handleInputChange = (details: ArkComboBox.InputValueChangeDetails) => {
    setItems(
      initialItems.filter((item) =>
        item.label.toLowerCase().includes(details.inputValue.toLowerCase()),
      ),
    );
  };

  const combobox = useCombobox({
    ...rest,
    collection,
    multiple,
    name,
    onInputValueChange: handleInputChange,
    value,
  });

  return (
    <ArkComboBox.RootProvider value={combobox}>
      <div className={className}>
        <ArkComboBox.Label className={LabelStyles}>{name}</ArkComboBox.Label>
        <ArkComboBox.Control className={ControlStyles}>
          {multiple && combobox.selectedItems.length > 0 && !!onRemoveItem && (
            <div className={PillContainerStyles}>
              {combobox.selectedItems.map((item) => (
                <span className={PillStyles} key={item.value}>
                  <span>{item.label}</span>
                  <button
                    aria-label="Remove item"
                    className={PillCloseButtonStyles}
                    onClick={() => onRemoveItem(item.value)}
                  >
                    <i aria-hidden="true" className="fa-solid fa-xmark"></i>
                  </button>
                </span>
              ))}
            </div>
          )}
          <ArkComboBox.Input className={InputStyles} />
          <ArkComboBox.Trigger className={TriggerStyles}>
            <i aria-hidden="true" className="fa-solid fa-sort"></i>
          </ArkComboBox.Trigger>
          <ArkComboBox.ClearTrigger className={ClearTriggerStyles}>
            <i aria-hidden="true" className={ClearTriggerIconStyles}></i>
          </ArkComboBox.ClearTrigger>
        </ArkComboBox.Control>
        <Portal>
          <ArkComboBox.Positioner>
            <ArkComboBox.Content className={ContentStyles}>
              {collection.items.map((item) => (
                <ArkComboBox.Item
                  className={ItemStyles}
                  item={item}
                  key={item.label}
                >
                  <ArkComboBox.ItemText className={ItemTextStyles}>
                    <span className={ItemLabelStyles}>{item.label}</span>
                    <span className={ItemDescriptionStyles}>
                      {item.description}
                    </span>
                  </ArkComboBox.ItemText>
                  <ArkComboBox.ItemIndicator className={ItemIndicatorStyles}>
                    ✓
                  </ArkComboBox.ItemIndicator>
                </ArkComboBox.Item>
              ))}
            </ArkComboBox.Content>
          </ArkComboBox.Positioner>
        </Portal>
      </div>
    </ArkComboBox.RootProvider>
  );
}

function ComboBoxWithField({
  className = "",
  description,
  disabled,
  errorMessage,
  readOnly,
  required,
  validationState,
  ...rest
}: Props) {
  return (
    <Field.Root
      className={className}
      disabled={disabled}
      invalid={validationState === ValidationStateEnum.Invalid}
      readOnly={readOnly}
      required={required}
    >
      <ComboBoxRoot {...rest} />
      <div className="mt-2">
        {!!description && (
          <Field.HelperText className={DescriptionStyles}>
            {description}
          </Field.HelperText>
        )}
        {!!errorMessage && (
          <Field.ErrorText className={ErrorMessageStyles}>
            {errorMessage}
          </Field.ErrorText>
        )}
      </div>
    </Field.Root>
  );
}

export default function ComboBox({ withField, ...rest }: Props) {
  if (withField) {
    return <ComboBoxWithField {...rest} />;
  }

  return <ComboBoxRoot {...rest} />;
}
