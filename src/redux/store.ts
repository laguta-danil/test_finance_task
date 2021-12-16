import { configureStore } from "@reduxjs/toolkit";

import stonksReducer from "./stoksSlice";

export const store = configureStore({
  reducer: {
    stoks: stonksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
