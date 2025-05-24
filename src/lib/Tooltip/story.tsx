// Components
import Button from "../Button";
import Tooltip from ".";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

export default function TooltipStory(props: Props) {
  return (
    <Tooltip {...props}>
      <Button
        className="rounded-full! p-0! size-15!"
        variant={ButtonVariantsEnum.Outline}
      >
        <i aria-hidden="true" className="fa-solid fa-ghost text-2xl"></i>
      </Button>
    </Tooltip>
  );
}
