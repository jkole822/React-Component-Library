// Packages
import { Slider as RadixSlider } from "radix-ui";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

// Slider
import {
  LabelStyles,
  RootStyles,
  ThumbStyles,
  TrackStyles,
  RangeStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

export default function Slider({
  className = "",
  description,
  errorMessage,
  name,
  validationState,
  value,
  withField,
  ...rest
}: Props) {
  const id = useRef(uuid());

  return (
    <div data-invalid={validationState === ValidationStateEnum.Invalid}>
      {withField && (
        <label className={LabelStyles} htmlFor={id.current}>
          {name}
        </label>
      )}
      <RadixSlider.Root
        {...rest}
        {...(withField && (!!description || !!errorMessage)
          ? {
              "aria-describedby": `${description ? `${id.current}-description` : ``} ${errorMessage && validationState === ValidationStateEnum.Invalid ? `${id.current}-error-message` : ``}`,
            }
          : {})}
        className={`${className} ${RootStyles}`}
        id={id.current}
        name={name}
      >
        <RadixSlider.Track className={TrackStyles}>
          <RadixSlider.Range className={RangeStyles} />
        </RadixSlider.Track>
        {value?.map((_, index) => (
          <RadixSlider.Thumb className={ThumbStyles} key={index} />
        ))}
      </RadixSlider.Root>
      {withField && (
        <div className="mt-2">
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
