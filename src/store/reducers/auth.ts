import { createSlice } from "@reduxjs/toolkit";

export type AuthStateType = {
  isAuthenticated: boolean;
};

const DEFAULT_STATE: AuthStateType = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: DEFAULT_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      setTimeout(() => window.location.assign("/configuration"), 0);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("persist:root");
      window.location.assign("/");
    },
  },
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
