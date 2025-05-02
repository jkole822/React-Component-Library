// Packages
import { Switch as RadixSwitch } from "radix-ui";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

// Styles
import {
  ContainerStyles,
  ControlStyles,
  FlexContainerStyles,
  LabelStyles,
  SwitchContainerStyles,
  ThumbStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

export default function Switch({
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
    <div
      className={className}
      data-invalid={validationState === ValidationStateEnum.Invalid}
    >
      <RadixSwitch.Root {...rest} className={ContainerStyles} name={name}>
        <div className={FlexContainerStyles}>
          <div className={SwitchContainerStyles}>
            <div className={ControlStyles}>
              <RadixSwitch.Thumb className={ThumbStyles} />
            </div>
          </div>
          <label className={LabelStyles}>{name}</label>
        </div>
      </RadixSwitch.Root>
      {withField && (
        <div className="mt-4">
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
