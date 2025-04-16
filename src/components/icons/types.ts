import { HTMLAttributes } from "react";

import { Close } from "./paths/Close";
import { Config } from "./paths/Config";
import { Exit } from "./paths/Exit";
import { Hamburguer } from "./paths/Hamburger";
import { Home } from "./paths/Home";

export enum SIZE_ENUM {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export type SizeOptions = "sm" | "md" | "lg";

export interface IconProps extends HTMLAttributes<SVGElement> {
  color?: string;
  size?: SizeOptions;
  name: ICON_NAMES;
}

export interface PathProps {
  color: string;
}

export const ICON_ZOOM = {
  [SIZE_ENUM.SMALL]: "80%",
  [SIZE_ENUM.MEDIUM]: "100%",
  [SIZE_ENUM.LARGE]: "120%",
};

export const ICONS = {
  Close,
  Config,
  Exit,
  Hamburguer,
  Home,
};

export type ICON_NAMES = keyof typeof ICONS;
