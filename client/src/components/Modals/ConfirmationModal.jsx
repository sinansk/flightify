import React from "react";
import { destroyModal } from "@/utils/modalHooks";
import { Button } from "../ui/button";

const ConfirmationModal = (data) => {
  const title = data.data?.title;
  const text = data.data?.text;
  const handleConfirm = () => {
    data.data.onConfirm();
    destroyModal();
  };
  const handleDecline = () => {
    destroyModal();
  };
  return (
    <div className="w-30 flex flex-col items-center justify-center gap-5 p-5 px-7">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{text}</p>
      <div className="mx-auto flex justify-center gap-5 text-center">
        <Button onClick={handleConfirm}>YES</Button>
        <Button onClick={handleDecline}>NO</Button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
