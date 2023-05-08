import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  isOpenBookNoteDetailModalAtom,
  isOpenBookNoteModalAtom,
  isOpenModalAtom,
} from "../store/modalStore";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useRecoilState(isOpenModalAtom);

  const [isOpenBookNoteModal, setIsOpenBookNoteModal] = useRecoilState(
    isOpenBookNoteModalAtom
  );

  const [isOpenBookNoteDetailModal, setIsOpenBookNoteDetailModal] =
    useRecoilState(isOpenBookNoteDetailModalAtom);

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

  const onOpenBookNoteModal = () => {
    setIsOpenBookNoteModal(true);
    const body = document.querySelector("body");
    body!!.style.overflowY = "hidden";
  };

  const onCloseBookNoteModal = () => {
    setIsOpenBookNoteModal(false);
    const body = document.querySelector("body");
    body!!.style.overflowY = "auto";
  };

  const onOpenBookNoteDetailModal = () => {
    setIsOpenBookNoteDetailModal(true);
    const body = document.querySelector("body");
    body!!.style.overflowY = "hidden";
  };

  const onCloseBookNoteDetailModal = () => {
    setIsOpenBookNoteDetailModal(false);
    const body = document.querySelector("body");
    body!!.style.overflowY = "auto";
  };

  return {
    isOpenModal,
    onCloseModal,
    onOpenModal,
    isOpenBookNoteModal,
    onOpenBookNoteModal,
    onCloseBookNoteModal,
    isOpenBookNoteDetailModal,
    onOpenBookNoteDetailModal,
    onCloseBookNoteDetailModal,
  };
};

export default useModal;
