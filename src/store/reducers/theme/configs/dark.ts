import { ITheme } from "../types";
import { PRESETS } from "./presets";

export const DARK: ITheme = {
  ...PRESETS,
  colors: {
    background: {
      primary: "red",
      secondary: "#FFF",
    },
    text: {
      primary: "#121313",
      secondary: "#FFF",
    },
    border: "#434343",
  },
};
