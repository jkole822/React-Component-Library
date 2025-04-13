// Packages
import { useState } from "react";

// Components
import Checkbox from ".";

// Styles
import {
  PararaphStyles,
  SubHeadingStyles,
} from "../../../../Solid-Component-Library/src/styles";

// Types
import type { Props } from "./types";

export default function CheckboxStory({ defaultChecked, ...rest }: Props) {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  return (
    <>
      <Checkbox
        {...rest}
        checked={!defaultChecked ? checked : undefined}
        onCheckedChange={!defaultChecked ? setChecked : undefined}
      />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{checked ? "Checked" : "Not Checked"}</p>
    </>
  );
}
