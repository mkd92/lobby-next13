import React from "react";
import { useAppSelector } from "../utils/redux/hooks";
import { selectSidebarOpen } from "../utils/redux/sidebar/sidebarSlice";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  return (
    <div className="flex  h-screen ">
      <div
        className={`bg-gray-700 duration-300 ${sidebarOpen ? "w-80" : "w-20"}`}
      >
        <Sidebar />
      </div>
      <div className="h-full w-full">
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
