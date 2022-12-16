import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.config";

export const protectRoute = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    return () => {};
  }, [user]);
  return user;
};
