// Packages
import { useState } from "react";

// Components
import Button from "../Button";
import Dialog from ".";
import Input from "../Input";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

export default function DialogStory({ defaultOpen, ...rest }: Props) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const Trigger = () => (
    <Button onClick={() => setOpen(!open)} variant={ButtonVariantsEnum.fill}>
      Open Dialog
    </Button>
  );

  const openProps = defaultOpen
    ? { defaultOpen }
    : { open, onOpenChange: setOpen, trigger: <Trigger /> };

  return (
    <>
      <Dialog {...rest} {...openProps}>
        <div className="border-t-2 border-neutral-secondary-700">
          <Input
            autoComplete={AutoCompleteEnum.name}
            className="mb-7 mt-5"
            id="name"
            inputClass="[&_~_label]:bg-neutral-secondary-900!"
            name="Name"
            onChange={setName}
            required
            value={name}
          />
          <Input
            autoComplete={AutoCompleteEnum.username}
            className=""
            id="username"
            inputClass="[&_~_label]:bg-neutral-secondary-900!"
            name="Username"
            onChange={setUsername}
            required
            value={username}
          />
        </div>
      </Dialog>
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>Name: {name}</p>
      <p className={PararaphStyles}>Username: {username}</p>
    </>
  );
}
