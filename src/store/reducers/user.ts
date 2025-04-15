import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFormData } from "src/pages/SignUp/types";

const DEFAULT_STATE: IFormData = {
  name: "",
  lastName: "",
  email: "",
  country: "",
};

export type FieldsType = keyof IFormData;

const userSlice = createSlice({
  name: "user",
  initialState: DEFAULT_STATE,
  reducers: {
    createUser(state, action: PayloadAction<IFormData>) {
      localStorage.setItem("brq:isAuthenticated", "true");

      return { ...state, ...action.payload };
    },
    logout() {
      localStorage.removeItem("brq:isAuthenticated");

      return DEFAULT_STATE;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { createUser, logout } = userSlice.actions;
