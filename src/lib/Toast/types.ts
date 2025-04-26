export enum ToastTypeEnum {
  Create = "create",
  Update = "update",
}

export type ToastType = ToastTypeEnum.Create | ToastTypeEnum.Update;

export interface IToast {
  description?: string;
  title: string;
  type: ToastType;
}

export interface Props {
  toast?: IToast;
}
