import React from "react";
import { protectRoute } from "../../../utils/protectRoute";

const Transactions = () => {
  const user = protectRoute();
  return <div>Transactions</div>;
};

export default Transactions;
