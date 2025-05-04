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
    disabled,
  href,
  onClick,
  showBottomGlow = false,
  target = "_self",
  type = "button",
  variant = ButtonVariantsEnum.Fill,
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

  const isFillButton = variant === ButtonVariantsEnum.Fill;
  const isLink = !!href;
  const Comp = isLink ? "a" : "button";
  const variantStyles = isFillButton
    ? FillButtonStyles({ active })
    : variant === ButtonVariantsEnum.Outline
      ? OutlineButtonStyles({ showBottomGlow })
      : variant === ButtonVariantsEnum.LineOne
        ? LineOneButtonStyles
        : variant === ButtonVariantsEnum.LineTwo
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
    disabled,
    'data-disabled': disabled,
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
