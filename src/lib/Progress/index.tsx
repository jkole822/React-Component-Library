// Packages
import { Progress as ArkProgress } from "radix-ui";

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
  return (
    <ArkProgress.Root
      {...rest}
      className={`${className} ${RootStyles}`}
      value={value}
    >
      <label className={LabelStyles}>{label}</label>
      <ArkProgress.Indicator
        className={IndicatorStyles}
        style={
          !!value || value === 0
            ? { transform: `translateX(-${100 - value}%)` }
            : {}
        }
      />
    </ArkProgress.Root>
  );
}
