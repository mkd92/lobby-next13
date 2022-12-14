import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { auth, provider } from "../utils/firebase/firebase.config";

const LoginForm = ({ model }: { model: () => void }) => {
  return (
    <div>
      <button className="btn" onClick={model}>
        Log in with Google
      </button>
    </div>
  );
};

export default LoginForm;
