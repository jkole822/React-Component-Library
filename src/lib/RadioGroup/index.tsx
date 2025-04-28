// Packages
import { RadioGroup as RadixRadioGroup } from "radix-ui";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

// Styles
import {
  ContainerStyles,
  GliderContainerStyles,
  GliderStyles,
  InputStyles,
  ItemLabelStyles,
  ItemStyles,
  LabelStyles,
  OptionContainerStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { RadioGroupOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Props, RadioGroupOrientation } from "./types";

export default function RadioGroupRoot({
  className = "",
  description,
  errorMessage,
  items,
  name,
  orientation = RadioGroupOrientationEnum.Vertical,
  validationState,
  value,
  withField,
  ...rest
}: Props) {
  const [valueIndex, setValueIndex] = useState<number | undefined>();
  const id = useRef(uuid());

  const distance = (orientation: RadioGroupOrientation) =>
    orientation === orientation ? `${100 / items.length}%` : "100%";

  useEffect(() => {
    setValueIndex(items.findIndex((item) => item === value));
  }, [value]);

  return (
    <RadixRadioGroup.Root
      {...rest}
      {...(!!description || !!errorMessage
        ? {
            "aria-describedby": `${description ? `${id.current}-description` : ``} ${errorMessage && validationState === ValidationStateEnum.Invalid ? `${id.current}-error-message` : ``}`,
          }
        : {})}
      className={`${className} ${ContainerStyles}`}
      data-invalid={validationState === ValidationStateEnum.Invalid}
      name={name}
      orientation={orientation}
      value={value}
    >
      <label className={LabelStyles}>{name}</label>
      <div className={OptionContainerStyles}>
        <div
          role="presentation"
          style={{
            height: "100%",
            gridTemplateColumns: items.map(() => "1fr").join(" "),
          }}
        >
          {items.map((item) => (
            <RadixRadioGroup.Item
              className={ItemStyles}
              key={item}
              id={`item-${item}`}
              value={item}
            >
              <RadixRadioGroup.Indicator className={InputStyles} />
              <label className={ItemLabelStyles} htmlFor={`item-${item}`}>
                {item}
              </label>
            </RadixRadioGroup.Item>
          ))}
        </div>
        <div className={GliderContainerStyles}>
          {!!value && (
            <div
              className={GliderStyles}
              style={{
                height: distance(RadioGroupOrientationEnum.Vertical),
                transform:
                  valueIndex || valueIndex === 0
                    ? `translate${orientation === RadioGroupOrientationEnum.Horizontal ? "X" : "Y"}(${valueIndex! * 100}%)`
                    : "",
                width: distance(RadioGroupOrientationEnum.Horizontal),
              }}
            ></div>
          )}
        </div>
      </div>
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
    </RadixRadioGroup.Root>
  );
}
