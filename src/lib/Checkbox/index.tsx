// Packages
import { Checkbox as RadixCheckbox } from "radix-ui";

// Styles
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  LabelStyles,
  PathStyles,
  VectorStyles,
} from "./styles";

// Types
import { CheckboxValidationStateEnum, type Props } from "./types";

export default function Checkbox({
  checked,
  className = "",
  description,
  errorMessage,
  name,
  validationState,
  ...rest
}: Props) {
  const rootProps = {
    ...rest,
    checked,
    class: ContainerStyles,
    name,
  };

  return (
    <div className={`${className} w-fit`}>
      <RadixCheckbox.Root {...rootProps} className={InputStyles}>
        <svg
          className={VectorStyles}
          viewBox="0 0 64 64"
          height="2em"
          width="2em"
        >
          <path
            className={PathStyles}
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
          ></path>
        </svg>
        <label className={LabelStyles}>{name}</label>
      </RadixCheckbox.Root>
      {!!description && <div className={DescriptionStyles}>{description}</div>}
      {!!errorMessage &&
        validationState === CheckboxValidationStateEnum.Invalid && (
          <div className={ErrorMessageStyles}>{errorMessage}</div>
        )}
    </div>
  );
}
