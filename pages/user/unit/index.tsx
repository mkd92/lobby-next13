import React from "react";
import { protectRoute } from "../../../utils/protectRoute";

const Unit = () => {
  const user = protectRoute();
  return <div>Unit</div>;
};

export default Unit;
