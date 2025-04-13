// Packages
import { useState } from "react";

// Components
import Checkbox from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function CheckboxStory({ defaultChecked, ...rest }: Props) {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  const checkedProps = defaultChecked
    ? { defaultChecked }
    : { checked, onCheckedChange: setChecked };

  return (
    <>
      <Checkbox {...rest} {...checkedProps} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{checked ? "Checked" : "Not Checked"}</p>
    </>
  );
}
