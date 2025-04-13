// Packages
import { Collapsible as RadixCollapsible } from "radix-ui";

// Styles
import { ContentContainerStyles, ContentStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Collapsible({
  className = "",
  buttonContent,
  children,
  ...rest
}: Props) {
  return (
    <RadixCollapsible.Root {...rest} className={className}>
      <RadixCollapsible.Trigger className={TriggerStyles}>
        {buttonContent}
        <i
          aria-hidden="true"
          className="fa-solid fa-sort in-data-[state=open]:hidden!"
        ></i>
        <i
          aria-hidden="true"
          className="fa-solid fa-close hidden! in-data-[state=open]:block!"
        ></i>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className={ContentContainerStyles}>
        <div className={ContentStyles}>{children}</div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
}
