import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "Bryann",
  lastName: "Brandão",
  email: "",
  country: "Brasil",
};

export type FieldsType = keyof typeof initialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    change(state, action: PayloadAction<{ name: FieldsType; value: any }>) {
      const { name, value } = action.payload;

      console.log({ name, value });

      state[name] = value;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { change } = userSlice.actions;
