// Packages
import { useState } from "react";

// Components
import RadioGroup from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function RadioGroupStory(props: Props) {
  const [value, setValue] = useState("");

  return (
    <>
      <RadioGroup {...props} onValueChange={setValue} value={value} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{value}</p>
    </>
  );
}
