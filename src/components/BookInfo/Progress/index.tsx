import { useEffect } from "react";
import useModal from "../../../hook/useModal";
import Modal from "../../common/Modal";
import * as P from "./style";
import { BsBookmarkPlusFill } from "react-icons/bs";
const Progress = () => {
  const { isOpenModal, onOpenModal } = useModal();

  return (
    <>
      <P.ProgressCotnainer>
        <P.TitleBookMark>
          <P.Title>진행도</P.Title>
          <P.BookMark onClick={onOpenModal}>
            <BsBookmarkPlusFill size={50} />
          </P.BookMark>
        </P.TitleBookMark>
        <P.ProgressStart />
        <P.ProgressBar />
      </P.ProgressCotnainer>
      {isOpenModal && (
        <Modal title="진행도 업데이트">
          <P.PageinputContainer>
            <P.Pageinput type="number" placeholder="시작페이지" />
            <P.Pageinput type="number" placeholder="마지막 페이지" />
          </P.PageinputContainer>
        </Modal>
      )}
    </>
  );
};

export default Progress;
