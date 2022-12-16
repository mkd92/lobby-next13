import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface SidebarState {
  open: boolean;
  modalOpen: boolean;
}

const initialState: SidebarState = {
  open: true,
  modalOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const { toggleSidebar, toggleModal } = sidebarSlice.actions;
export const selectSidebarOpen = (state: RootState) => state.sidebar.open;
export const selectModalOpen = (state: RootState) => state.sidebar.modalOpen;

export default sidebarSlice.reducer;
