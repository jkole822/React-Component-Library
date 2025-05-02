// Packages
import { Tabs as RadixTabs } from "radix-ui";
import { useState } from "react";

// Styles
import {
  ContainerStyles,
  ContentStyles,
  IndicatorStyles,
  ListStyles,
  TriggerStyles,
} from "./styles";

// Types
import { Props, TabsOrientationEnum } from "./types";

export default function Tabs({
  className = "",
  onValueChange,
  orientation = TabsOrientationEnum.Horizontal,
  items,
  ...rest
}: Props) {
  const [activeTabSize, setActiveTabSize] = useState(0);
  const [translation, setTranslation] = useState(0);

  const handleValueChange = (value: string) => {
    if (!!onValueChange) onValueChange(value);

    const activeTab = document.querySelector(`[id*="${value}"]`);
    const allTabs = document.querySelectorAll(".tabs-trigger");
    if (!!activeTab && orientation === TabsOrientationEnum.Horizontal) {
      setActiveTabSize(activeTab.clientWidth);

      if (allTabs?.length > 0) {
        const activeTabIndex = Array.from(allTabs).findIndex(
          (tab) => tab.id === activeTab.id
        );
        const allTabsWidth = Array.from(allTabs)
          .slice(0, activeTabIndex)
          .reduce((acc, tab) => acc + tab.clientWidth, 0);
        setTranslation(allTabsWidth);
      }
    } else if (!!activeTab) {
      setActiveTabSize(activeTab.clientHeight);

      if (allTabs?.length > 0) {
        const activeTabIndex = Array.from(allTabs).findIndex(
          (tab) => tab.id === activeTab.id
        );
        const allTabsHeight = Array.from(allTabs)
          .slice(0, activeTabIndex)
          .reduce((acc, tab) => acc + tab.clientHeight, 0);
        setTranslation(allTabsHeight);
      }
    }
  };

  return (
    <RadixTabs.Root
      {...rest}
      className={`${className} ${ContainerStyles}`}
      orientation={orientation}
      onValueChange={handleValueChange}
    >
      <RadixTabs.List className={ListStyles}>
        {items.map(({ id, label }) => (
          <RadixTabs.Trigger className={TriggerStyles} key={id} value={id}>
            {label}
          </RadixTabs.Trigger>
        ))}
        <div
          className={IndicatorStyles}
          style={
            orientation === TabsOrientationEnum.Horizontal
              ? {
                  transform: `translateX(${translation}px)`,
                  width: activeTabSize,
                }
              : {
                  transform: `translateY(${translation}px)`,
                  height: activeTabSize,
                }
          }
        ></div>
      </RadixTabs.List>
      {items.map(({ children, id }) => (
        <RadixTabs.Content className={ContentStyles} key={id} value={id}>
          {children}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
