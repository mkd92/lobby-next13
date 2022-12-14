import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase/firebase.config";
import { selectUser } from "../../utils/redux/auth/authSlice";
import { useAppSelector } from "../../utils/redux/hooks";

const Dashboard = () => {
  const router = useRouter();
  const usr = useAppSelector(selectUser);
  useEffect(() => {
    if (!usr) {
      router.push("/");
    }
  }, [usr]);

  return <div>Dashboard</div>;
};

export default Dashboard;
