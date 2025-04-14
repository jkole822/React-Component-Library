// Packages
import {
  Combobox as ArkComboBox,
  createListCollection,
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
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  ItemDescriptionStyles,
  ItemIndicatorStyles,
  ItemLabelStyles,
  ItemStyles,
  ItemTextStyles,
  LabelStyles,
  TriggerStyles,
} from "./styles";

// Types
import { ComboBoxValidationStateEnum, type Props } from "./types";

function ComboBoxRoot({
  className = "",
  items: initialItems,
  name,
  value,
  ...rest
}: Props) {
  const [items, setItems] = useState(initialItems);

  const collection = useMemo(
    () =>
      createListCollection({
        items: items.map((item) => ({ ...item, value: item.id })),
      }),
    [items]
  );

  const handleInputChange = (details: ArkComboBox.InputValueChangeDetails) => {
    setItems(
      initialItems.filter((item) =>
        item.label.toLowerCase().includes(details.inputValue.toLowerCase())
      )
    );
  };

  return (
    <ArkComboBox.Root
      {...rest}
      className={className}
      collection={collection}
      name={name}
      onInputValueChange={handleInputChange}
      value={value}
    >
      <ArkComboBox.Label className={LabelStyles}>{name}</ArkComboBox.Label>
      <ArkComboBox.Control className={ControlStyles}>
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
    </ArkComboBox.Root>
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
      invalid={validationState === ComboBoxValidationStateEnum.Invalid}
      readOnly={readOnly}
      required={required}
    >
      <ComboBoxRoot {...rest} />
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
    </Field.Root>
  );
}

export default function ComboBox({ withField, ...rest }: Props) {
  if (withField) {
    return <ComboBoxWithField {...rest} />;
  }

  return <ComboBoxRoot {...rest} />;
}
