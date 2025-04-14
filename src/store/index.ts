import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;
