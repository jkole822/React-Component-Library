// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { useMemo, useState } from "react";

// Components
import Input from "../Input";
import Popover from ".";

// Styles
import { OutlineButtonStyles } from "../Button/styles";
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props } from "./types";

export default function PopoverStory(props: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const id = useMemo(() => uuid(), []);
  const name = useMemo(() => faker.lorem.word(), []);

  return (
    <>
      <Popover
        {...props}
        onOpenChange={setOpen}
        trigger={
          <button
            className={`${OutlineButtonStyles({ showBottomGlow: false })} p-0! rounded-full! size-15!`}
          >
            <i aria-hidden="true" className="fa-solid fa-ghost text-2xl"></i>
          </button>
        }
      >
        <Input
          autoComplete={AutoCompleteEnum.name}
          className="[&_.input-input_~_label]:bg-neutral-secondary-900! mt-8"
          id={id}
          inputProps={{
            onChange: (event) => setValue(event.target.value),
            value,
          }}
          name={name}
          required
        />
      </Popover>
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{value}</p>
      <p className={SubHeadingStyles}>Open Check</p>
      <p className={PararaphStyles}>{open ? "Open" : "Closed"}</p>
    </>
  );
}
