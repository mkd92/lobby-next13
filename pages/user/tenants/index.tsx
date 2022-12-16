import React from "react";
import { protectRoute } from "../../../utils/protectRoute";

const Tenants = () => {
  const user = protectRoute();
  return <div>Tenants</div>;
};

export default Tenants;
