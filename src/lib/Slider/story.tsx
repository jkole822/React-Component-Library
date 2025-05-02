// Packages
import { useState } from "react";

// Components
import Slider from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function SliderStory({ value, ...props }: Props) {
  const [valueState, setValueState] = useState<number[] | undefined>(value);

  return (
    <>
      <Slider {...props} onValueChange={setValueState} value={valueState} />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>
        {valueState?.map((_, index) => (
          <span key={index}>
            {valueState[index]}
            {index !== valueState.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </>
  );
}
