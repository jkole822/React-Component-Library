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
import { AccordionDirectionEnum, AccordionOrientationEnum } from "./types";
import type { JSX } from "react";
import type { MultipleProps, SingleProps } from "./types";

export function SingleAccordion({
  className = "",
  dir = AccordionDirectionEnum.Left,
  headingLevel,
  items,
  orientation = AccordionOrientationEnum.Horizontal,
  ...rest
}: SingleProps) {
  const HeadingElement = headingLevel as keyof JSX.IntrinsicElements;

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const hasDuplicates = ids.length !== new Set(ids).size;
    if (hasDuplicates) {
      console.warn("Duplicate item IDs detected in accordion items.");
    }
  }, []);

  return (
    <RadixAccordion.Root
      className={`${className} ${ContainerStyles}`}
      dir={dir}
      orientation={orientation}
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

export function MultipleAccordion({
  className = "",
  dir = AccordionDirectionEnum.Left,
  headingLevel,
  items,
  orientation = AccordionOrientationEnum.Horizontal,
  ...rest
}: MultipleProps) {
  const HeadingElement = headingLevel as keyof JSX.IntrinsicElements;

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const hasDuplicates = ids.length !== new Set(ids).size;
    if (hasDuplicates) {
      console.warn("Duplicate item IDs detected in accordion items.");
    }
  }, []);

  return (
    <RadixAccordion.Root
      className={`${className} ${ContainerStyles}`}
      dir={dir}
      orientation={orientation}
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
