// Packages
import { useState } from "react";

// Components
import { MultipleAccordion, SingleAccordion } from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { MultipleProps, SingleProps } from "./types";

export function SingleAccordionStory(props: SingleProps) {
  const [value, setValue] = useState<string | undefined>();

  return (
    <>
      <SingleAccordion {...props} onValueChange={setValue} value={value} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>
        {Array.isArray(value) ? value.map((item) => item) : value}
      </p>
    </>
  );
}

export function MultipleAccordionStory(props: MultipleProps) {
  const [value, setValue] = useState<string[] | undefined>();

  return (
    <>
      <MultipleAccordion {...props} onValueChange={setValue} value={value} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>
        {Array.isArray(value) ? value.map((item) => item) : value}
      </p>
    </>
  );
}
