// Packages
import { useState } from "react";

// Components
import ComboBox from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { ComboBoxItem, Props } from "./types";

export default function ComboBoxStory({ items, ...rest }: Props) {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (update: { items: ComboBoxItem[]; value: string[] }) => {
    setValue(update.value);
  };

  const handleRemoveItem = (id: string) => {
    setValue((prev) => prev.filter((item) => item !== id));
  };

  return (
    <>
      <ComboBox
        {...rest}
        items={items}
        onRemoveItem={handleRemoveItem}
        onValueChange={handleChange}
        value={value}
      />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>Selected Item IDs:</p>
      <div className="flex flex-col gap-0.5 mt-1 text-sm">
        {value.map((val) => (
          <span key={val}>
            {items.find((item) => item.value === val)?.label ?? ""}
          </span>
        ))}
      </div>
    </>
  );
}
