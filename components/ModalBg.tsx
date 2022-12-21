import React from "react";

const ModalBg = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed h-screen w-screen bg-black z-10 opacity-50"
      onClick={onClose}
    ></div>
  );
};

export default ModalBg;
