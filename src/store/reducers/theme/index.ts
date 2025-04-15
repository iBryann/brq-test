import { createSlice } from "@reduxjs/toolkit";

export { ThemeProvider } from "./ThemeProvider";
import { ITheme } from "./types";
import { DARK } from "./configs/dark";
import { LIGHT } from "./configs/light";

export enum MODE_ENUM {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeStateType = {
  mode: `${MODE_ENUM}`;
  theme: ITheme;
};

const initialState: ThemeStateType = {
  mode: MODE_ENUM.LIGHT,
  theme: LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === MODE_ENUM.LIGHT) {
        state.mode = MODE_ENUM.DARK;
        state.theme = DARK;
      } else {
        state.mode = MODE_ENUM.LIGHT;
        state.theme = LIGHT;
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
