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
  errorMessage,
  name,
  inputProps,
  type = InputTypeEnum.text,
  validationState = ValidationStateEnum.Valid,
  ...rest
}: Props) {
  return (
    <Field.Root
      {...rest}
      className={`${className} ${ContainerStyles}`}
      invalid={validationState === ValidationStateEnum.Invalid}
    >
      <Field.Input
        {...inputProps}
        className={InputStyles({
          hasValue: !!inputProps?.value,
        })}
        type={type}
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
