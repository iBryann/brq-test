import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import {
  themeReducer,
  layoutReducer,
  userReducer,
  authReducer,
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  layout: layoutReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type StoreType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;
