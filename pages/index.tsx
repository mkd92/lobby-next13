import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase/firebase.config";

const Index = () => {
  const [user, loading] = useAuthState(auth);

  return <div>Lobby Landing Page</div>;
};

export default Index;
