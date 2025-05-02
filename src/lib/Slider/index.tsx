// Packages
import { Slider as RadixSlider } from "radix-ui";

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
  return (
    <div data-invalid={validationState === ValidationStateEnum.Invalid}>
      {withField && (
        <div className={LabelStyles}>
          <label>{name}</label>
        </div>
      )}
      <RadixSlider.Root
        {...rest}
        className={`${className} ${RootStyles}`}
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
            <div className={DescriptionStyles}>{description}</div>
          )}
          {!!errorMessage &&
            validationState === ValidationStateEnum.Invalid && (
              <div className={ErrorMessageStyles}>{errorMessage}</div>
            )}
        </div>
      )}
    </div>
  );
}
