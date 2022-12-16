import React from "react";
import { protectRoute } from "../../../utils/protectRoute";

const Property = () => {
  const user = protectRoute();
  return <div>Property</div>;
};

export default Property;
