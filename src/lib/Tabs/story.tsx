// Packages
import { useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Button from "../Button";
import Input from "../Input";
import Tabs from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import type { Dispatch, SetStateAction } from "react";
import type { Props } from "./types";

const TabContent = ({
  buttonText,
  description,
  label,
  onChange,
  value,
}: {
  buttonText: string;
  description: string;
  label: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}) => (
  <>
    <p className="mb-5 text-neutral-primary-300">{description}</p>
    <Input
      className="[&_.input-input_~_label]:bg-neutral-secondary-950!"
      inputProps={{
        onChange: (event) => onChange(event.target.value),
        value,
      }}
      name={label}
    />
    <div className="mt-5 flex justify-end">
      <Button variant={ButtonVariantsEnum.Outline}>{buttonText}</Button>
    </div>
  </>
);

export default function TabsStory({ items: _, ...rest }: Props) {
  const tabOne = useRef({
    id: uuid(),
    description: faker.lorem.sentence(),
    buttonText: faker.lorem.word(),
    label: faker.lorem.word(),
  });
  const tabTwo = useRef({
    id: uuid(),
    description: faker.lorem.sentence(),
    buttonText: faker.lorem.word(),
    label: faker.lorem.word(),
  });
  const tabThree = useRef({
    id: uuid(),
    description: faker.lorem.sentence(),
    buttonText: faker.lorem.word(),
    label: faker.lorem.word(),
  });

  const [activeTab, setActiveTab] = useState<string>(tabOne.current.id);
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");

  return (
    <>
      <Tabs
        {...rest}
        items={[
          {
            children: (
              <TabContent
                {...tabOne.current}
                onChange={setValueOne}
                value={valueOne}
              />
            ),
            id: tabOne.current.id,
            label: tabOne.current.label,
          },
          {
            children: (
              <TabContent
                {...tabTwo.current}
                onChange={setValueTwo}
                value={valueTwo}
              />
            ),
            id: tabTwo.current.id,
            label: tabTwo.current.label,
          },
          {
            children: (
              <TabContent
                {...tabThree.current}
                onChange={setValueThree}
                value={valueThree}
              />
            ),
            id: tabThree.current.id,
            label: tabThree.current.label,
          },
        ]}
        onValueChange={setActiveTab}
        value={activeTab}
      />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>Value One: {valueOne}</p>
      <p className={PararaphStyles}>Value Two: {valueTwo}</p>
      <p className={PararaphStyles}>Value Three: {valueThree}</p>
    </>
  );
}
