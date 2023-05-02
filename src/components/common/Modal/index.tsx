import React, { ReactNode } from "react";
import * as M from "./style";
import useModal from "../../../hook/useModal";
import { useSetRecoilState } from "recoil";
import { isOpenModalAtom } from "../../../store/modalStore";

type PropsType = {
  children: ReactNode;
  title: string;
};
const Modal = ({ children, title }: PropsType) => {
  const { onCloseModal } = useModal();
  return (
    <>
      <M.Background onClick={onCloseModal}>
        <M.ModalContainer onClick={(e) => e.stopPropagation()}>
          <M.TitleContainer>
            <M.Title>{title}</M.Title>
          </M.TitleContainer>
          <M.ChildrenContainer>{children}</M.ChildrenContainer>
        </M.ModalContainer>
      </M.Background>
    </>
  );
};

export default Modal;
