// Packages
import { useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Input from "../Input";
import Popover from "../Popover";
import Tooltip from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import { OutlineButtonStyles } from "../Button/styles";
import type { Props } from "./types";

export default function TooltipStory(props: Props) {
  const [value, setValue] = useState("");
  const ref = useRef({
    description: faker.lorem.sentence(),
    id: uuid(),
    name: faker.lorem.word(),
    title: faker.lorem.words(2),
  });

  return (
    <>
      <Tooltip {...props}>
        <Popover
          trigger={
            <button
              className={`${OutlineButtonStyles({ showBottomGlow: false })} p-0! rounded-full! size-15!`}
            >
              <i aria-hidden="true" className="fa-solid fa-ghost text-2xl"></i>
            </button>
          }
          description={ref.current.description}
          title={ref.current.title}
        >
          <Input
            autoComplete={AutoCompleteEnum.name}
            className="[&_.input-input_~_label]:bg-neutral-secondary-900! mt-8"
            id={ref.current.id}
            inputProps={{
              onChange: (event) => setValue(event.target.value),
              value,
            }}
            name={ref.current.name}
            required
          />
        </Popover>
      </Tooltip>
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{value}</p>
    </>
  );
}
