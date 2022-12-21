import React from "react";
import { useAppDispatch } from "../utils/redux/hooks";
import { toggleAddPropModal } from "../utils/redux/ui/uiSlice";
import AddPropertyForm from "./AddPropertyForm";
import ModalBg from "./ModalBg";

const AddPropertyModal = () => {
  const dispatch = useAppDispatch();
  const onToggleHandler = () => {
    dispatch(toggleAddPropModal());
  };
  return (
    <div className="">
      <ModalBg onClose={onToggleHandler} />
      <div className="absolute flex justify-center items-center w-screen h-screen ">
        <div
          className=" bg-bgLight rounded-2xl h-2/3 w-1/3 z-20
        "
        >
          <AddPropertyForm />
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;
