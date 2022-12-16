import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { auth, provider } from "../utils/firebase/firebase.config";
import { useAppDispatch } from "../utils/redux/hooks";
import { toggleModal } from "../utils/redux/sidebar/sidebarSlice";

const GoogleBtn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        // const token = credentials?.accessToken;
        // const user = result.user;
        // dispatch(updateUser(user));
        router.push("/");
        dispatch(toggleModal());
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <button
        onClick={onClickHandler}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Login with google
        </span>
      </button>
    </div>
  );
};

export default GoogleBtn;
