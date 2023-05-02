import { useState } from "react";
import { useRecoilState } from "recoil";
import { isOpenModalAtom } from "../store/modalStore";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useRecoilState(isOpenModalAtom);

  const onOpenModal = () => {
    setIsOpenModal(true);
    const body = document.querySelector("body");
    body!!.style.overflowY = "hidden";
  };

  const onCloseModal = () => {
    setIsOpenModal(false);

    const body = document.querySelector("body");
    body!!.style.overflowY = "auto";
  };

  return { isOpenModal, onCloseModal, onOpenModal };
};

export default useModal;
