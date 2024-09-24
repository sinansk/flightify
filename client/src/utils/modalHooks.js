import { store } from "../redux/store";
import { append, destroy, destroyAll } from "@/redux/slices/modalSlice";
import { useSelector } from "react-redux";

export const useModals = () => useSelector((state) => state.modal.modals);
export const createModal = (name, data = false) =>
  store.dispatch(
    append({
      name,
      data,
    }),
  );
export const destroyModal = () => store.dispatch(destroy());
export const destroyAllModal = () => store.dispatch(destroyAll());
