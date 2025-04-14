import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.theme === "light") state.theme = "dark";
      else state.theme = "light";
    },
  },
});

export const { toggle } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
