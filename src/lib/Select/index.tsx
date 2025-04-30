// Packages
import { Select as RadixSelect } from "radix-ui";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

// Styles
import {
  ContentStyles,
  ItemDescriptionStyles,
  ItemIndicatorStyles,
  ItemLabelStyles,
  ItemStyles,
  LabelStyles,
  ScrollIconStyles,
  TriggerStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

export default function Select({
  className = "",
  contentProps = { position: "popper", sideOffset: 8 },
  description,
  errorMessage,
  name,
  options,
  placeholder,
  validationState,
  withField,
  ...rest
}: Props) {
  const id = useRef(uuid());

  return (
    <div className={className}>
      {withField && (
        <label className={LabelStyles} htmlFor={id.current}>
          {name}
        </label>
      )}
      <RadixSelect.Root {...rest} name={name}>
        <RadixSelect.Trigger
          {...(withField && (!!description || !!errorMessage)
            ? {
                "aria-describedby": `${description ? `${id.current}-description` : ``} ${errorMessage && validationState === ValidationStateEnum.Invalid ? `${id.current}-error-message` : ``}`,
              }
            : {})}
          className={TriggerStyles}
          data-invalid={validationState === ValidationStateEnum.Invalid}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <i aria-hidden="true" className="fa-solid fa-sort"></i>
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content {...contentProps} className={ContentStyles}>
            <RadixSelect.ScrollUpButton className={ScrollIconStyles}>
              <i aria-hidden="true" className="fa-solid fa-arrow-up"></i>
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport>
              {options.map((option) => (
                <RadixSelect.Item className={ItemStyles} value={option.id}>
                  <RadixSelect.ItemText>
                    <span className={ItemLabelStyles}>{option.label}</span>
                  </RadixSelect.ItemText>
                  <span className={ItemDescriptionStyles}>
                    {option.description}
                  </span>
                  <RadixSelect.ItemIndicator className={ItemIndicatorStyles} />
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton className={ScrollIconStyles}>
              <i aria-hidden="true" className="fa-solid fa-arrow-down"></i>
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
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
