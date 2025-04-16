import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LayoutStateType = {
  showMenu: boolean;
};

const DEFAULT_STATE: LayoutStateType = {
  showMenu: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: DEFAULT_STATE,
  reducers: {
    setShowMenu(state, action: PayloadAction<boolean>) {
      state.showMenu = action.payload;
    },
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const layoutReducer = layoutSlice.reducer;
export const { setShowMenu, toggleMenu } = layoutSlice.actions;
