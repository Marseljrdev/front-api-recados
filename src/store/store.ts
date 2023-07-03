import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "./rootReducer";

export const store = configureStore({
  reducer: combinedReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
