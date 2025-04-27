// Packages
import { createToaster, Toast as ArkToast, Toaster } from "@ark-ui/react/toast";
import { useEffect, useRef } from "react";

// Styles
import {
  CloseButtonStyles,
  DescriptionStyles,
  RootStyles,
  TitleStyles,
} from "./styles";

// Types
import { ToastTypeEnum } from "./types";
import type { Props } from "./types";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 10,
});

export default function Toast({ toast }: Props) {
  const id = useRef("");

  const createToast = () => {
    if (!toast) return;

    id.current = toaster.create(toast);
  };

  const updateToast = () => {
    if (!id.current || !toast) return;

    toaster.update(id.current, toast);
  };

  useEffect(() => {
    if (toast?.type === ToastTypeEnum.Create) {
      createToast();
    } else {
      updateToast();
    }
  }, [toast]);

  return (
    <Toaster toaster={toaster}>
      {(toast) => (
        <ArkToast.Root key={toast.id} className={RootStyles}>
          <ArkToast.Title className={TitleStyles}>{toast.title}</ArkToast.Title>
          {!!toast.description && (
            <ArkToast.Description className={DescriptionStyles}>
              {toast.description}
            </ArkToast.Description>
          )}
          <ArkToast.CloseTrigger className={CloseButtonStyles}>
            <i aria-hidden="true" className="fa-solid fa-xmark"></i>
          </ArkToast.CloseTrigger>
        </ArkToast.Root>
      )}
    </Toaster>
  );
}
