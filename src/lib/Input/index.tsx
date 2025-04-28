// Packages
import { Field } from "@ark-ui/react/field";

// Styles
import { ContainerStyles, InputStyles, LabelStyles } from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { InputTypeEnum } from "./types";
import { ValidationStateEnum } from "../../types";
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
  validationState = ValidationStateEnum.Valid,
  value,
  ...rest
}: Props) {
  return (
    <Field.Root
      className={`${className} ${ContainerStyles}`}
      disabled={disabled}
      invalid={validationState === ValidationStateEnum.Invalid}
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
      <div className="mt-2">
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
      </div>
    </Field.Root>
  );
}
