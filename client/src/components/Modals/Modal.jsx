import React from "react";
import modalData from "./modalData";
import { destroyModal, useModals } from "@/utils/modalHooks";
import { createPortal } from "react-dom";
import { useState, forwardRef, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";
const Modal = forwardRef(({ props, ref, className }) => {
  const modals = useModals();
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  if (modals.length === 0) return null;

  return createPortal(
    <>
      <div
        onClick={() => destroyModal()}
        className="fixed inset-0 z-40 flex cursor-pointer items-center justify-center bg-gray-900 opacity-90"
      />
      <div
        className={cn(
          "no-scrollbar fixed bottom-4 left-4 right-4 top-4 z-50 m-auto h-fit max-h-full rounded-md border-[0.5px] border-gray-400 bg-white shadow-lg dark:bg-gray-700 dark:text-slate-200 sm:w-fit lg:bottom-12 lg:left-12 lg:right-12 lg:top-12 lg:w-fit",
          className,
        )}
      >
        <button
          onClick={() => destroyModal()}
          className="fixed right-0 top-0 z-50 ml-auto flex rounded-sm border-[1px] border-violet-700 bg-primary px-2.5 py-1 text-white hover:bg-violet-500/80 hover:text-white sm:right-5 sm:top-5"
        >
          X
        </button>
        <div className="grid max-w-full">
          {modals?.map((modal) => {
            const currentModal = modalData.find((m) => m.name === modal.name);
            return (
              <div
                key={modal.name}
                className="transition-all-900 hidden last:block lg:max-h-screen"
              >
                <currentModal.element data={modal.data} />
              </div>
            );
          })}
        </div>
      </div>
    </>,
    document.getElementById("modal"),
  );
});

export default Modal;
