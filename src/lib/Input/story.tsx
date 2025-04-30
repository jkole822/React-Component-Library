// Packages
import { useState } from "react";

// Components
import Input from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function InputStory({ inputProps, ...rest }: Props) {
  const [value, setValue] = useState("");

  return (
    <>
      <Input
        {...rest}
        inputProps={{
          ...inputProps,
          onChange: (event) => setValue(event.target.value),
          value,
        }}
      />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{value}</p>
    </>
  );
}
