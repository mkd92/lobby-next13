import React from "react";
import { useAppSelector } from "../utils/redux/hooks";
import { selectSidebarOpen } from "../utils/redux/sidebar/sidebarSlice";
import { selectAddPropModel } from "../utils/redux/ui/uiSlice";
import AddPropertyModal from "./AddPropertyModal";
import ModalBg from "./ModalBg";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  const addPropertyModalOpen = useAppSelector(selectAddPropModel);
  return (
    <>
      <div className="flex  h-screen bg-bgLight text-textLight">
        {addPropertyModalOpen && <AddPropertyModal />}

        <div
          className={`bg-bgLight duration-300 ${sidebarOpen ? "w-80" : "w-20"}`}
        >
          <Sidebar />
        </div>
        <div className="h-full w-full">
          <main className="h-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
