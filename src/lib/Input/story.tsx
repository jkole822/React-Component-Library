// Packages
import { useState } from "react";

// Components
import Input from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function InputStory(props: Props) {
  const [value, setValue] = useState("");

  return (
    <>
      <Input {...props} onChange={setValue} value={value} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{value}</p>
    </>
  );
}
