import React from "react";
import { protectRoute } from "../../../utils/protectRoute";
import { BsPlusCircle } from "react-icons/bs";
import AddPropertyModal from "../../../components/AddPropertyModal";
import { useAppDispatch } from "../../../utils/redux/hooks";
import { toggleAddPropModal } from "../../../utils/redux/ui/uiSlice";

const Property = () => {
  const user = protectRoute();
  const dispatch = useAppDispatch();
  const onToggleHandler = () => {
    dispatch(toggleAddPropModal());
  };
  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full flex flex-col">
        <div className="bg-white shadow-lg h-16 m-6 rounded-lg flex items-center">
          <div className="px-8 text-xl font-semibold uppercase">Properties</div>
          <div className="flex-grow"></div>
          <div
            onClick={onToggleHandler}
            className="rounded-full bg-gray-600 h-10 w-10 flex justify-center items-center mr-4 cursor-pointer duration-300 hover:bg-gray-300 hover:text-gray-800"
          >
            <BsPlusCircle size={30} />
          </div>
        </div>
        <div className="bg-white h-full m-6 shadow-lg rounded-lg">Bot</div>
      </div>
      <div
        onClick={onToggleHandler}
        className=" absolute right-6 bottom-6 rounded-full bg-white drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] h-16 w-16 flex justify-center items-center mr-4  duration-300 hover:bg-textLight cursor-pointer hover:text-bgLight"
      >
        <BsPlusCircle size={30} />
      </div>
    </div>
  );
};

export default Property;
