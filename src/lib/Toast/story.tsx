// Packages
import { faker } from "@faker-js/faker";
import { useState } from "react";

// Components
import Button from "../Button";
import Toast from ".";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import { ToastTypeEnum } from "./types";
import type { IToast } from "./types";

export default function ToastStory() {
  const [toast, setToast] = useState<IToast | undefined>();

  const createToast = () => {
    setToast({
      title: faker.lorem.words(2),
      description: faker.lorem.sentence(),
      type: ToastTypeEnum.Create,
    });
  };

  const updateToast = () => {
    setToast({
      title: faker.lorem.words(2),
      description: faker.lorem.sentence(),
      type: ToastTypeEnum.Update,
    });
  };

  return (
    <div>
      <div className="flex gap-4">
        <Button onClick={createToast}>Create Toast</Button>
        <Button onClick={updateToast} variant={ButtonVariantsEnum.Outline}>
          Update Toast
        </Button>
      </div>
      <Toast toast={toast}></Toast>
    </div>
  );
}
