// Packages
import { Accordion as RadixAccordion } from "radix-ui";
import { useEffect } from "react";

// Styles
import {
  ButtonStyles,
  ContainerStyles,
  ContentStyles,
  DescriptionStyles,
  HeadingStyles,
  ItemContentStyles,
  SectionStyles,
} from "./styles";

// Types
import {
  AccordionDirectionEnum,
  AccordionEnum,
  AccordionOrientationEnum,
} from "./types";
import type { JSX } from "react";
import type { Props } from "./types";

export default function Accordion({
  className = "",
  dir = AccordionDirectionEnum.left,
  headingLevel,
  items,
  orientation = AccordionOrientationEnum.horizontal,
  type = AccordionEnum.single,
  ...rest
}: Props) {
  const HeadingElement = headingLevel as keyof JSX.IntrinsicElements;

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const hasDuplicates = ids.length !== new Set(ids).size;
    if (hasDuplicates) {
      console.warn("Duplicate item IDs detected in accordion items.");
    }
  }, []);

  return (
    //@ts-ignore
    <RadixAccordion.Root
      className={`${className} ${ContainerStyles}`}
      dir={dir}
      orientation={orientation}
      type={type}
      {...rest}
    >
      {items.map((item) => (
        <RadixAccordion.Item
          className={SectionStyles}
          disabled={item.disabled}
          key={item.id}
          value={item.id}
        >
          <RadixAccordion.Header asChild className={HeadingStyles}>
            <HeadingElement>
              <RadixAccordion.Trigger className={ButtonStyles}>
                <span>{item.title}</span>
                <i
                  aria-hidden="true"
                  className="accordion-trigger-icon fa-solid fa-chevron-down"
                ></i>
              </RadixAccordion.Trigger>
            </HeadingElement>
          </RadixAccordion.Header>
          <RadixAccordion.Content className={ContentStyles}>
            {!!item.description && (
              <p className={DescriptionStyles}>{item.description}</p>
            )}
            {!!item.content && (
              <div className={ItemContentStyles}>{item.content}</div>
            )}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
