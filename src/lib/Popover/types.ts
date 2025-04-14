import type { Dispatch, CSSProperties, ReactNode, SetStateAction } from "react";

export enum PopoverAlignEnum {
  Center = "center",
  End = "end",
  Start = "start",
}

export enum PopoverSideEnum {
  Bottom = "bottom",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum PopoverStickyEnum {
  Always = "always",
  Partial = "partial",
}

export type PopoverAlign =
  | PopoverAlignEnum.Center
  | PopoverAlignEnum.End
  | PopoverAlignEnum.Start;

export type PopoverSide =
  | PopoverSideEnum.Bottom
  | PopoverSideEnum.Left
  | PopoverSideEnum.Right
  | PopoverSideEnum.Top;

export type PopoverSticky =
  | PopoverStickyEnum.Always
  | PopoverStickyEnum.Partial;

interface ContentProps {
  align?: PopoverAlign;
  alignOffset?: number;
  arrowPadding?: number;
  asChild?: boolean;
  avoidCollisions?: boolean;
  className?: string;
  collisionBoundary?: Element | null | Array<Element | null>;
  collisionPadding?: number | Partial<Record<PopoverSide, number>>;
  forceMount?: true;
  hideWhenDetached?: boolean;
  side?: PopoverSide;
  sideOffset?: number;
  sticky?: PopoverSticky;
  styles?: CSSProperties;
}

export interface Props {
  children?: ReactNode;
  contentProps?: ContentProps;
  description?: string;
  modal?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
  title?: string;
  trigger?: ReactNode;
}
