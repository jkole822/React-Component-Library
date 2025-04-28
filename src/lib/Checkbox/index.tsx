// Packages
import { Checkbox as RadixCheckbox } from "radix-ui";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

// Styles
import {
  ContainerStyles,
  InputStyles,
  LabelStyles,
  PathStyles,
  VectorStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

export default function Checkbox({
  checked,
  className = "",
  description,
  errorMessage,
  name,
  validationState,
  withField,
  ...rest
}: Props) {
  const id = useRef(uuid());

  return (
    <div className={`${className} ${ContainerStyles}`}>
      <RadixCheckbox.Root
        {...(!!description || !!errorMessage
          ? {
              "aria-describedby": `${description ? `${id.current}-description` : ``} ${errorMessage && validationState === ValidationStateEnum.Invalid ? `${id.current}-error-message` : ``}`,
            }
          : {})}
        className={InputStyles}
        checked={checked}
        data-invalid={validationState === ValidationStateEnum.Invalid}
        name={name}
        {...rest}
      >
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
      {withField && (
        <div className="ml-2 mt-1">
          {!!description && (
            <div className={DescriptionStyles} id={`${id.current}-description`}>
              {description}
            </div>
          )}
          {!!errorMessage &&
            validationState === ValidationStateEnum.Invalid && (
              <div
                className={ErrorMessageStyles}
                id={`${id.current}-error-message`}
              >
                {errorMessage}
              </div>
            )}
        </div>
      )}
    </div>
  );
}
