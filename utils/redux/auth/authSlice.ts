import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface AuthState {
  user: null | User;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { updateUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
