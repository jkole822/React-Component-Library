// Packages
import { useState } from "react";

// Components
import Switch from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function SwitchStory({ defaultChecked, ...rest }: Props) {
  const [checked, setChecked] = useState(false);

  const checkedProps = defaultChecked
    ? { defaultChecked }
    : { checked, onCheckedChange: setChecked };

  return (
    <>
      <Switch {...rest} {...checkedProps} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{checked ? "Checked" : "Not Checked"}</p>
    </>
  );
}
