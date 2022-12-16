import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import sidebarReducer from "./sidebar/sidebarSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
