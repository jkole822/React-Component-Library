// Packages
import { useState } from "react";

// Components
import Accordion from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function AccordionStory(props: Props) {
  const [value, setValue] = useState<string | string[] | undefined>();

  return (
    <>
      <Accordion {...props} onValueChange={setValue} value={value} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>
        {Array.isArray(value) ? value.map((item) => item) : value}
      </p>
    </>
  );
}
