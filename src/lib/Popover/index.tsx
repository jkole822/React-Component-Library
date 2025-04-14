// Packages
import { Popover as RadixPopover } from "radix-ui";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";

// Styles
import {
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  TitleStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Popover({
  children,
  contentProps,
  description,
  title,
  trigger,
  ...rest
}: Props) {
  const id = useMemo(() => uuid(), []);

  return (
    <RadixPopover.Root {...rest}>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          {...(!!contentProps ? contentProps : {})}
          {...(!!title ? { "aria-labelledby": `${id}-title` } : {})}
          {...(!!description
            ? { "aria-describedby": `${id}-description` }
            : {})}
          className={`${contentProps?.className ?? ""} ${ContentStyles}`}
          style={!!contentProps?.styles ? contentProps.styles : {}}
        >
          <RadixPopover.Arrow className="popover-arrow" />
          {!!title && (
            <div className={TitleStyles} id={`${id}-title`}>
              {title}
            </div>
          )}
          {!!description && (
            <div className={DescriptionStyles} id={`${id}-description`}>
              {description}
            </div>
          )}
          {children}
          <RadixPopover.Close className={CloseButtonStyles}>
            <i aria-hidden="true" className="fa-solid fa-xmark"></i>
          </RadixPopover.Close>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
