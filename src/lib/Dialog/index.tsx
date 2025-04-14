// Packages
import { Dialog as RadixDialog } from "radix-ui";

// Styles
import {
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  HeadingStyles,
  OverlayStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Dialog({
  children,
  description,
  title,
  trigger,
  ...rest
}: Props) {
  return (
    <RadixDialog.Root {...rest}>
      {!!trigger && (
        <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      )}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={OverlayStyles} />
        <RadixDialog.Content className={ContentStyles}>
          {!!title && (
            <RadixDialog.Title className={HeadingStyles}>
              {title}
            </RadixDialog.Title>
          )}
          {!!description && (
            <RadixDialog.Description className={DescriptionStyles}>
              {description}
            </RadixDialog.Description>
          )}
          {children}
          <RadixDialog.Close asChild>
            <button className={CloseButtonStyles} aria-label="Close">
              <i aria-hidden="true" className="fa-solid fa-xmark" />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
