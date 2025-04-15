import { ITheme } from "../types";
import { PRESETS } from "./presets";

export const LIGHT: ITheme = {
  ...PRESETS,
  colors: {
    background: {
      primary: "#121313",
      secondary: "#FFF",
    },
    text: {
      primary: "#121313",
      secondary: "#FFF",
      error: "#ff5c5c",
    },
    border: {
      primary: "#434343",
      focus: "#ed8b00 ",
    },
    button: {
      text: "#FFF",
      background: "#121313",
      hover: "#ed8b00",
    },
  },
};
