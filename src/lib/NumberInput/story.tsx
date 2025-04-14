// Packages
import { useState } from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";

// Components
import NumberInput from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function NumberInputStory(props: Props) {
  const [value, setValue] = useState("");

  const handleChange = (details: ArkNumberInput.ValueChangeDetails) => {
    setValue(details.value);
  };

  return (
    <>
      <NumberInput {...props} onValueChange={handleChange} value={value} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{value}</p>
    </>
  );
}
