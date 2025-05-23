// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { useMemo, useState } from "react";

// Components
import Button from "../Button";
import Input from "../Input";
import Popover from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import { ButtonVariantsEnum } from "../Button/types.ts";
import type { Props } from "./types";

export default function PopoverStory({ defaultOpen, ...rest }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const id = useMemo(() => uuid(), []);
  const name = useMemo(() => faker.lorem.word(), []);

  const openProps = defaultOpen
    ? { defaultOpen }
    : { open, onOpenChange: setOpen };

  return (
    <>
      <Popover
        {...rest}
        {...openProps}
        trigger={
          <Button
            className="rounded-full! p-0! size-15!"
            onClick={() => setOpen(!open)}
            variant={ButtonVariantsEnum.Outline}
          >
            <i aria-hidden="true" className="fa-solid fa-ghost text-2xl"></i>
          </Button>
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
