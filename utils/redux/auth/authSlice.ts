import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface AuthState {
  user: null | string;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      if (payload) {
        state.user = payload.uid;
      } else {
        state.user = null;
      }
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { updateUser, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
