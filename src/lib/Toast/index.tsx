// Packages
import { Toast as ArkToast, Toaster } from "@ark-ui/react/toast";

// Styles
import {
  CloseButtonStyles,
  DescriptionStyles,
  RootStyles,
  TitleStyles,
} from "./styles";

// Utils
import { toaster } from "./toaster";

export default function Toast() {
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
