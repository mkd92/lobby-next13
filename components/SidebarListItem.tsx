import Link from "next/link";
import React from "react";
import { useAppSelector } from "../utils/redux/hooks";
import { selectSidebarOpen } from "../utils/redux/sidebar/sidebarSlice";

const SidebarListItem = ({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  href: string;
}) => {
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  return (
    <li
      className={`bg-white shadow-lg font-semibold rounded-md m-4 p-4 duration-200 ${
        !sidebarOpen && "rounded-full m-2 p-2"
      } hover:bg-textLight cursor-pointer hover:text-bgLight`}
    >
      <Link href={href}>
        <div className="flex justify-center items-center">
          {icon}
          {sidebarOpen && title}
        </div>
      </Link>
    </li>
  );
};

export default SidebarListItem;
