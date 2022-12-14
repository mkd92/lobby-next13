import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MutableRefObject, RefObject, useRef } from "react";
import LoginForm from "./LoginForm";
import { auth, provider } from "../utils/firebase/firebase.config";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { selectUser, updateUser } from "../utils/redux/auth/authSlice";

function Navbar() {
  const modal: RefObject<HTMLInputElement> = useRef(null);
  const usr = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const token = credentials?.accessToken;
        const user = result.user;
        dispatch(updateUser(user));
        router.push("/");
        if (modal.current?.checked) {
          modal.current.checked = !modal.current.checked;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const onLogout = () => {
    signOut(auth).then(() => {
      dispatch(updateUser(null));
    });
  };
  return (
    <div className="navbar bg-base-100">
      {/* Modal */}
      <input
        ref={modal}
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <LoginForm model={googleLogin} />
        </label>
      </label>
      {/* end Model */}
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl ">
          Lobby
        </Link>
      </div>
      <div className="flex-none">
        {!usr && (
          <>
            <label htmlFor="my-modal-4" className="btn mx-2">
              Signup
            </label>
            <label htmlFor="my-modal-4" className="btn mx-2">
              Login
            </label>
          </>
        )}
        {usr && (
          <>
            <Link href={"/dashboard"} className="btn mx-2 ">
              Dashboard
            </Link>
            <button className="btn mx-2" onClick={onLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
