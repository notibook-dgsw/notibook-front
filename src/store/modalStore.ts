import { atom } from "recoil";

export const isOpenModalAtom = atom({
  key: "modal/isOpenModal", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
