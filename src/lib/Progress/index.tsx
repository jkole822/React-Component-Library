// Packages
import { Progress as RadixProgress } from "radix-ui";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

// Styles
import { IndicatorStyles, LabelStyles, RootStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Progress({
  className = "",
  label,
  value,
  ...rest
}: Props) {
  const id = useRef(uuid());

  return (
    <RadixProgress.Root
      {...rest}
      className={`${className} ${RootStyles}`}
      id={id.current}
      value={value}
    >
      <label className={LabelStyles} htmlFor={id.current}>
        {label}
      </label>
      <RadixProgress.Indicator
        className={IndicatorStyles}
        style={
          !!value || value === 0
            ? { transform: `translateX(-${100 - value}%)` }
            : {}
        }
      />
    </RadixProgress.Root>
  );
}
