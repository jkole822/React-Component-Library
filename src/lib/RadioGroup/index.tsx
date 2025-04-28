// Packages
import { useEffect, useState } from "react";
import { RadioGroup as RadixRadioGroup } from "radix-ui";

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

// Types
import {
  Props,
  RadioGroupOrientation,
  RadioGroupOrientationEnum,
  RadioGroupValidationStateEnum,
} from "./types";

export default function RadioGroup({
  className = "",
  items,
  name,
  orientation = RadioGroupOrientationEnum.Vertical,
  validationState,
  value,
  ...rest
}: Props) {
  const [valueIndex, setValueIndex] = useState<number | undefined>();
  const distance = (orientation: RadioGroupOrientation) =>
    orientation === orientation ? `${100 / items.length}%` : "100%";

  useEffect(() => {
    setValueIndex(items.findIndex((item) => item === value));
  }, [value]);

  return (
    <RadixRadioGroup.Root
      {...rest}
      className={`${className} ${ContainerStyles}`}
      name={name}
      orientation={orientation}
      value={value}
    >
      <label className={LabelStyles}>{name}</label>
      <div
        className={OptionContainerStyles}
        data-invalid={validationState === RadioGroupValidationStateEnum.Invalid}
      >
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
    </RadixRadioGroup.Root>
  );
}
