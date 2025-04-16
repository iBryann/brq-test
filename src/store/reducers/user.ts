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
      return { ...state, ...action.payload };
    },
  },
});

export const userReducer = userSlice.reducer;
export const { createUser } = userSlice.actions;
