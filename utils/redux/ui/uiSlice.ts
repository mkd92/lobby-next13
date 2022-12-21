import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface SidebarState {
  addPropModal: boolean;
}

const initialState: SidebarState = {
  addPropModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAddPropModal: (state) => {
      state.addPropModal = !state.addPropModal;
    },
  },
});

export const { toggleAddPropModal } = uiSlice.actions;
export const selectAddPropModel = (state: RootState) => state.ui.addPropModal;
export default uiSlice.reducer;
