// Packages
import { faker } from "@faker-js/faker";
import { useState } from "react";

// Components
import Button from "../Button";
import Toast from ".";

// Utils
import { toast, dismissToast, updateToast } from "./toaster";

// Types
import { ButtonVariantsEnum } from "../Button/types";

export default function ToastStory() {
  const [toastId, setToastId] = useState("");

  const create = () => {
    setToastId(
      toast({
        title: faker.lorem.words(2),
        description: faker.lorem.sentence(),
        type: "info",
      }),
    );
  };

  const dismiss = () => {
    dismissToast(toastId);
  };

  const update = () => {
    updateToast(toastId, {
      title: faker.lorem.words(2),
      description: faker.lorem.sentence(),
      type: "success",
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 items-start">
        <Button onClick={create} variant={ButtonVariantsEnum.Outline}>
          Create Toast
        </Button>
        <Button onClick={update}>Update Toast</Button>
        <Button onClick={dismiss}>Dismiss Toast</Button>
      </div>
      <Toast />
    </div>
  );
}
