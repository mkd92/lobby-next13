import React from "react";
import { BsArrowLeftCircleFill, BsLock } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import {
  selectModalOpen,
  selectSidebarOpen,
  toggleModal,
  toggleSidebar,
} from "../utils/redux/sidebar/sidebarSlice";
import { BiLockAlt } from "react-icons/bi";
import GoogleBtn from "./GoogleBtn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase/firebase.config";
import { signOut } from "firebase/auth";
import { logout } from "../utils/redux/auth/authSlice";
import SidebarContent from "./SidebarContent";
const Sidebar = () => {
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  const modalOpen = useAppSelector(selectModalOpen);
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);
  const onToggleHandler = () => {
    dispatch(toggleSidebar());
  };
  const onLogoutHandler = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  const onModalToggle = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      {/* model */}
      {modalOpen && (
        <>
          <div
            className="fixed left-0 right-0 h-screen w-screen bg-gray-800 opacity-50 z-10"
            onClick={onModalToggle}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 w-1/3 h-1/2 z-20">
            <div className="grid h-full place-items-center">
              <GoogleBtn />
            </div>
          </div>
        </>
      )}
      {/* end model */}
      <div className="relative w-full h-full flex flex-col">
        <BsArrowLeftCircleFill
          size={40}
          className={`absolute -right-5 top-3 duration-300 ${
            !sidebarOpen && "rotate-180"
          } `}
          onClick={onToggleHandler}
        />
        <div
          className={`text-xl font-bold flex ml-2 my-4 justify-center items-center`}
        >
          <svg
            width="20"
            height="43"
            viewBox="0 0 20 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3`}
          >
            <path
              d="M0.528412 43V13.9091H6.67898V37.929H19.1506V43H0.528412Z"
              fill="white"
            />
            <path
              d="M19.6222 1.628e-06L19.6222 29.0909H13.4716L13.4716 5.07102L1 5.07102L1 0L19.6222 1.628e-06Z"
              fill="white"
            />
          </svg>
          <div className={`ml-2 duration-200 ${!sidebarOpen && "scale-0 w-0"}`}>
            Lobby
          </div>
        </div>
        {user ? (
          <div
            className={`bg-gray-600 font-semibold rounded-md m-4 p-4 duration-200 ${
              !sidebarOpen && "rounded-full m-2 p-2"
            } hover:bg-gray-500 cursor-pointer hover:text-gray-800`}
          >
            <div className="flex justify-center items-center">
              <img
                className="h-10 w-10 rounded-full"
                src={
                  user.photoURL
                    ? user.photoURL
                    : `https://avatars.dicebear.com/api/adventurer/${user.displayName}.svg`
                }
                alt=""
              />
              {sidebarOpen && <div className="ml-2">{user.displayName}</div>}
            </div>
          </div>
        ) : (
          <div
            className={`bg-gray-600 rounded-md m-4 p-4 duration-200 font-semibold hover:text-gray-800 ${
              !sidebarOpen && "rounded-full"
            } hover:bg-gray-500 cursor-pointer`}
            onClick={onModalToggle}
          >
            {!sidebarOpen ? <BiLockAlt /> : <div>Login</div>}
          </div>
        )}
        <div className="flex-grow">
          <SidebarContent />
        </div>

        {user && (
          <div
            className={`bg-gray-600 rounded-md m-4 flex p-2 justify-center items-center duration-200 hover:bg-gray-500 cursor-pointer hover:text-gray-800 ${
              !sidebarOpen && "rounded-full"
            }`}
            onClick={onLogoutHandler}
          >
            {/* {!sidebarOpen} */}
            <BiLockAlt size={30} />
            {sidebarOpen && <div className="text-lg ">Logout</div>}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
