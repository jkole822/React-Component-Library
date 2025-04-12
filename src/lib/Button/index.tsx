// Packages
import { useEffect, useState } from "react";

// Components
import StarVector from "./starVector";

// Styles
import {
  FillButtonStyles,
  LineOneButtonStyles,
  LineTwoButtonStyles,
  OutlineButtonStyles,
} from "./styles";

// Types
import type { Props } from "./types";
import { ButtonVariantsEnum } from "./types";

export default function Button({
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  children,
  className = "",
  href,
  onClick,
  showBottomGlow = false,
  target = "_self",
  type = "button",
  variant = ButtonVariantsEnum.fill,
  ...rest
}: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 1000);
    }
  }, [active]);

  const isFillButton = variant === ButtonVariantsEnum.fill;
  const isLink = !!href;
  const Comp = isLink ? "a" : "button";
  const variantStyles = isFillButton
    ? FillButtonStyles({ active })
    : variant === ButtonVariantsEnum.outline
      ? OutlineButtonStyles({ showBottomGlow })
      : variant === ButtonVariantsEnum.lineOne
        ? LineOneButtonStyles
        : variant === ButtonVariantsEnum.lineTwo
          ? LineTwoButtonStyles
          : "";

  const rootProps = {
    ...rest,
    ...(isLink
      ? {
          ...{ href, target },
          rel: target === "_blank" ? "noreferrer" : undefined,
        }
      : { ariaControls, ariaExpanded, ariaHaspopup, type }),
    class: `${className} ${variantStyles}`,
    onClick: () => {
      setActive(true);
      if (onClick) onClick();
    },
  };

  return (
    <Comp {...rootProps}>
      {children}
      {isFillButton && (
        <>
          {Array.from({ length: 6 }, (_, index) => (
            <div className={`star star-${index}`} key={index}>
              <StarVector />
            </div>
          ))}
        </>
      )}
    </Comp>
  );
}
