// Packages
import { Tooltip as RadixTooltip } from "radix-ui";

// Styles
import { TextStyles, TooltipStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Tooltip({
  className = "",
  children,
  contentProps,
  text,
  ...rest
}: Props) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...rest}>
        <RadixTooltip.Trigger className={TriggerStyles}>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            {...contentProps}
            className={`${className} ${TooltipStyles}`}
          >
            <RadixTooltip.Arrow className="fill-primary-300" />
            <p className={TextStyles}>{text}</p>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
