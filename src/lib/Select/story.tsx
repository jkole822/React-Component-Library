// Packages
import { useState } from "react";

// Components
import Select from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function SelectStory({ options, ...rest }: Props) {
  const [value, setValue] = useState("");
  const label = options.find((option) => option.id === value)?.label ?? "";
  const description =
    options.find((option) => option.id === value)?.description ?? "";

  return (
    <>
      <Select
        {...rest}
        onValueChange={setValue}
        options={options}
        value={value}
      />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>Label: {label}</p>
      <p className={PararaphStyles}>Description: {description}</p>
    </>
  );
}
