// Packages
import { Field } from "@ark-ui/react/field";
import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";

// Styles
import {
  ControlStyles,
  DecrementTriggerStyles,
  IncrementTriggerStyles,
  InputContainerStyles,
  InputStyles,
  LabelStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

function NumberInputRoot({ className = "", name, ...rest }: Props) {
  return (
    <ArkNumberInput.Root {...rest} className={className}>
      <ArkNumberInput.Label className={LabelStyles}>
        {name}
      </ArkNumberInput.Label>
      <div className={InputContainerStyles}>
        <ArkNumberInput.Input className={InputStyles} />
        <ArkNumberInput.Control className={ControlStyles}>
          <ArkNumberInput.IncrementTrigger className={IncrementTriggerStyles}>
            <i aria-hidden="true" className="fa-solid fa-chevron-up"></i>
          </ArkNumberInput.IncrementTrigger>
          <ArkNumberInput.DecrementTrigger className={DecrementTriggerStyles}>
            <i aria-hidden="true" className="fa-solid fa-chevron-down"></i>
          </ArkNumberInput.DecrementTrigger>
        </ArkNumberInput.Control>
      </div>
    </ArkNumberInput.Root>
  );
}

function NumberInputWithField({
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
      <NumberInputRoot {...rest} />
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

export default function NumberInput({ withField, ...rest }: Props) {
  if (withField) {
    return <NumberInputWithField {...rest} />;
  }

  return <NumberInputRoot {...rest} />;
}
