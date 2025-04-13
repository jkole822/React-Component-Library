// Packages
import { useState } from "react";
import { faker } from "@faker-js/faker";

// Components
import Collapsible from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function CollapsibleStory({
  children,
  defaultOpen,
  ...rest
}: Props) {
  const [open, setOpen] = useState(false);

  const openProps = defaultOpen
    ? { defaultOpen }
    : { open, onOpenChange: setOpen };

  return (
    <>
      <Collapsible {...rest} {...openProps}>
        <span>{faker.lorem.words(3)}</span>
        <hr className="border-b-px border-neutral-secondary-700" />
        <span>{faker.lorem.words(2)}</span>
        <hr className="border-b-px border-neutral-secondary-700" />
        <span>{faker.lorem.words(4)}</span>
      </Collapsible>
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{open ? "Open" : "Closed"}</p>
    </>
  );
}
