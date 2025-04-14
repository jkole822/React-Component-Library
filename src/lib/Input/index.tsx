// Packages
import { Field } from "@ark-ui/react/field";

// Styles
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  LabelStyles,
} from "./styles";

// Types
import { InputTypeEnum, InputValidationStateEnum } from "./types";
import type { Props } from "./types";

export default function Input({
  className = "",
  description,
  disabled,
  errorMessage,
  inputClass = "",
  name,
  onChange,
  readOnly,
  required,
  type = InputTypeEnum.text,
  validationState = InputValidationStateEnum.Valid,
  value,
  ...rest
}: Props) {
  return (
    <Field.Root
      className={`${className} ${ContainerStyles}`}
      disabled={disabled}
      invalid={validationState === InputValidationStateEnum.Invalid}
      readOnly={readOnly}
      required={required}
    >
      <Field.Input
        {...rest}
        className={`${inputClass} ${InputStyles({
          hasValue: !!value,
        })}`}
        {...(!!onChange ? { onChange: (e) => onChange(e.target.value) } : {})}
        type={type}
        value={value}
      />
      <Field.Label className={LabelStyles}>{name}</Field.Label>
      {!!description && (
        <Field.HelperText className={DescriptionStyles}>
          {description}
        </Field.HelperText>
      )}
      {!!errorMessage && (
        <Field.ErrorText className={ErrorMessageStyles}>
          {description}
        </Field.ErrorText>
      )}
    </Field.Root>
  );
}
