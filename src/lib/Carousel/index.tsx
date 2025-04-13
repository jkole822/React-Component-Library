// Packages
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

// Components
import Button from "../Button";

// Styles
import {
  ButtonContainerStyles,
  ButtonIconStyles,
  ButtonStyles,
  CardContentStyles,
  CardStyles,
  CarouselStyles,
  ContainerStyles,
  DescriptionStyles,
  HeadingStyles,
} from "./styles";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

export default function Carousel({ className = "", items }: Props) {
  const [cards, setCards] = useState(items);
  const isTwoExtraSmall = useMediaQuery("(min-width: 384px)");
  const isSmall = useMediaQuery("(min-width: 640px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const displacement = () => (isLarge ? 220 : isSmall ? 170 : 140);

  const handleNext = () => {
    setCards([...cards.slice(1), cards[0]]);
  };

  const handlePrevious = () => {
    setCards([cards[items.length - 1], ...cards.slice(0, -1)]);
  };

  return (
    <div className={`${className} ${ContainerStyles}`}>
      <div className={CarouselStyles}>
        {cards.map(({ cta, description, image, title }, index) => (
          <div
            className={CardStyles}
            key={title}
            style={{
              backgroundImage: `url('${image.src}')`,
              left:
                index >= 2
                  ? `calc(${isTwoExtraSmall ? "50%" : "20px"} + ${(index - 2) * displacement()}px)`
                  : 0,
            }}
          >
            <div className={CardContentStyles}>
              <h2 className={HeadingStyles}>{title}</h2>
              <p className={DescriptionStyles}>{description}</p>
              {!!cta && (
                <Button {...cta} variant={ButtonVariantsEnum.outline}>
                  {cta?.title}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={ButtonContainerStyles}>
        <Button
          className={ButtonStyles}
          onClick={handlePrevious}
          variant={ButtonVariantsEnum.fill}
        >
          <i aria-hidden="true" className={ButtonIconStyles}></i>
        </Button>
        <Button
          className={ButtonStyles}
          onClick={handleNext}
          variant={ButtonVariantsEnum.fill}
        >
          <i
            aria-hidden="true"
            className={`${ButtonIconStyles} rotate-180`}
          ></i>
        </Button>
      </div>
    </div>
  );
}
