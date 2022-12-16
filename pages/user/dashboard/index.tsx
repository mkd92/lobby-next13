import React from "react";
import { protectRoute } from "../../../utils/protectRoute";

const Dashboard = () => {
  const user = protectRoute();
  return <div>Dashboard</div>;
};

export default Dashboard;
