// Packages
import { forwardRef, useEffect, useState } from "react";
import { NavigationMenu as RadixNavigationMenu } from "radix-ui";
import { useMediaQuery } from "usehooks-ts";
import { v4 as uuid } from "uuid";

// Components
import { SingleAccordion } from "../Accordion";
import Popover from "../Popover";

// Styles
import {
  ArrowStyles,
  ContentWithCallout,
  ContentWithoutCallout,
  IconStyles,
  IndicatorStyles,
  ItemCalloutStyles,
  ItemDescriptionStyles,
  ItemLabelStyles,
  ItemStyles,
  LineStyles,
  LineTopBottomStyles,
  ListStyles,
  MobileMenuButtonStyles,
  MobilePopoverContentStyles,
  MobilePopoverStyles,
  RootStyles,
  TitleContainerStyles,
  TitleStyles,
  TriggerIndicatorStyles,
  TriggerStyles,
  ViewportPositionStyles,
  ViewportStyles,
} from "./styles";

// Types

import {
  NavigationMenuOrientationEnum,
  type NavigationMenuItem,
  type Props,
} from "./types";
import { HeadingLevelEnum } from "../../types";

export default function NavigationMenu({
  className = "",
  homeHref,
  icon,
  items,
  orientation,
  title,
  ...rest
}: Props) {
  const isSmall = useMediaQuery("(min-width: 640px)");
  const Element = !!homeHref ? "a" : "div";
  const [contentWidth, setContentWidth] = useState(0);
  const [currentValueId, setCurrentValueId] = useState("");
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [width, setWidth] = useState(0);

  const hasImage = (menuItems: NavigationMenuItem[]) =>
    menuItems.some((item) => !!item.image);

  const handleValueChange = (value: string) => {
    const re = /radix-«r(\d+)»/;
    const match = value.match(re);

    if (!!match && match[1]) {
      const id = `content-radix-«r${match[1]}»`;
      setCurrentValueId(id);
    }
  };

  useEffect(() => {
    const navWidth =
      document.querySelector(".navigation-menu")?.getBoundingClientRect()
        .width ?? 0;

    const navTriggerWidth =
      document
        .querySelector(".navigation-menu-trigger")
        ?.getBoundingClientRect().width ?? 0;

    const navContentWidth =
      document
        .querySelector(`[id*='${currentValueId}']`)
        ?.getBoundingClientRect().width ?? 0;

    setWidth(navWidth);
    setTriggerWidth(navTriggerWidth);
    setContentWidth(navContentWidth);
  }, [currentValueId]);

  const Item = forwardRef<HTMLAnchorElement, NavigationMenuItem>(
    ({ description, href, image, title, ...itemProps }, ref) => {
      const Element = isSmall ? RadixNavigationMenu.Link : "a";

      return (
        <Element
          {...itemProps}
          className={!!image ? ItemCalloutStyles : ItemStyles}
          href={href}
          ref={ref}
        >
          {!!image && <img {...image} />}
          <div className={ItemLabelStyles}>{title}</div>
          {!!description && (
            <div className={ItemDescriptionStyles}>{description}</div>
          )}
        </Element>
      );
    }
  );

  const accordionItems = items
    .filter((menuItem) => menuItem.items?.length > 0)
    .map((menuItem) => ({
      disabled: menuItem.disabled,
      id: uuid(),
      content: (
        <div
          className={
            hasImage(menuItem.items)
              ? ContentWithCallout
              : ContentWithoutCallout
          }
        >
          {menuItem.items.map((item) => (
            <Item {...item} key={item.title} />
          ))}
        </div>
      ),
      title: menuItem.title,
    }));

  return (
    <div className={`${className} navigation-menu`}>
      {(!!icon || !!title) && (
        <Element
          {...(!!homeHref ? { href: homeHref } : {})}
          className={TitleContainerStyles}
        >
          {!!icon && (
            <figure>
              <img {...icon} className={IconStyles} />
              <figcaption className="h-0 opacity-0 w-0">
                Navigate to Home
              </figcaption>
            </figure>
          )}
          {!!title && <h1 className={TitleStyles}>{title}</h1>}
        </Element>
      )}
      <RadixNavigationMenu.Root
        {...rest}
        className={RootStyles}
        onValueChange={handleValueChange}
        orientation={orientation}
      >
        <RadixNavigationMenu.List className={ListStyles}>
          {items.map(({ disabled, href, items: _items, target, title }) => {
            const Element = !!href
              ? RadixNavigationMenu.Link
              : RadixNavigationMenu.Trigger;
            const hasSubMenu = _items.length > 0;

            return (
              <RadixNavigationMenu.Item key={title}>
                <Element
                  {...(!!href ? { href, target } : {})}
                  className={TriggerStyles}
                  disabled={disabled}
                >
                  {title}
                  {hasSubMenu && (
                    <i
                      aria-hidden="true"
                      className={TriggerIndicatorStyles}
                    ></i>
                  )}
                </Element>
                {_items.length > 0 && (
                  <RadixNavigationMenu.Content
                    className={
                      hasImage(_items)
                        ? ContentWithCallout
                        : ContentWithoutCallout
                    }
                  >
                    {_items.map((item) => (
                      <Item {...item} key={item.title} />
                    ))}
                  </RadixNavigationMenu.Content>
                )}
              </RadixNavigationMenu.Item>
            );
          })}
          <RadixNavigationMenu.Indicator
            className={IndicatorStyles}
            style={
              orientation === NavigationMenuOrientationEnum.Vertical
                ? {
                    left: triggerWidth + 0.5 * (width - triggerWidth) - 6,
                  }
                : {}
            }
          >
            <div className={ArrowStyles} />
          </RadixNavigationMenu.Indicator>
        </RadixNavigationMenu.List>
        <div
          className={ViewportPositionStyles}
          style={
            orientation === NavigationMenuOrientationEnum.Vertical
              ? {
                  left: width,
                  right: "auto",
                  width: contentWidth,
                }
              : {}
          }
        >
          <RadixNavigationMenu.Viewport className={ViewportStyles} />
        </div>
      </RadixNavigationMenu.Root>
      <Popover
        contentProps={{
          className: MobilePopoverContentStyles,
        }}
        modal
        open={mobileNavigationOpen}
        onOpenChange={setMobileNavigationOpen}
        trigger={
          <button className={MobilePopoverStyles}>
            <div
              className={MobileMenuButtonStyles({ open: mobileNavigationOpen })}
            >
              <svg viewBox="0 0 32 32">
                <path
                  className={LineTopBottomStyles}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className={LineStyles} d="M7 16 27 16"></path>
              </svg>
            </div>
          </button>
        }
      >
        <SingleAccordion
          collapsible
          headingLevel={HeadingLevelEnum.Two}
          items={accordionItems}
          type="single"
        />
        {items
          .filter((menuItem) => !!menuItem.href)
          .map((item) => (
            <a {...item} className={TriggerStyles} key={item.title}>
              {item.title}
            </a>
          ))}
      </Popover>
    </div>
  );
}
