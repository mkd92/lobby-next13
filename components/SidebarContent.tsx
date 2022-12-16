import React from "react";
import SidebarListItem from "./SidebarListItem";
import { BiBuildings, BiHomeHeart, BiTransferAlt } from "react-icons/bi";
import { ImManWoman } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
const SidebarContent = () => {
  return (
    <ul>
      <SidebarListItem
        href="/user/dashboard"
        icon={<RxDashboard size={30} />}
        title={<div className="ml-2">Dashboard</div>}
      />
      <SidebarListItem
        href="/user/property"
        icon={<BiBuildings size={30} />}
        title={<div className="ml-2">Property</div>}
      />
      <SidebarListItem
        href="/user/unit"
        icon={<BiHomeHeart size={30} />}
        title={<div className="ml-2">Unit</div>}
      />
      <SidebarListItem
        href="/user/tenants"
        icon={<ImManWoman size={30} />}
        title={<div className="ml-2">Tenants</div>}
      />
      <SidebarListItem
        href="/user/transactions"
        icon={<BiTransferAlt size={30} />}
        title={<div className="ml-2">Transactions</div>}
      />
    </ul>
  );
};

export default SidebarContent;
