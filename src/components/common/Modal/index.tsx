import React, { ReactNode } from "react";
import * as M from "./style";
import useModal from "../../../hook/useModal";

type PropsType = {
  children: ReactNode;
  title: string;
  // event: () => {};
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
          <M.BtnContainer>
            <M.CloseBtn>닫기</M.CloseBtn>
            <M.SaveBtn>저장</M.SaveBtn>
          </M.BtnContainer>
        </M.ModalContainer>
      </M.Background>
    </>
  );
};

export default Modal;
