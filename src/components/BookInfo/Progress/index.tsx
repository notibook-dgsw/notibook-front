import { useEffect } from "react";
import useModal from "../../../hook/useModal";
import Modal from "../../common/Modal";
import * as P from "./style";
import { BsBookmarkPlusFill } from "react-icons/bs";
import useProgress from "./hook/useProgress";
const Progress = ({ isbn }: { isbn: string }) => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { register, handleSubmit, errors, submitSave } = useProgress();

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
          <form
            onSubmit={handleSubmit(({ page }) => submitSave({ isbn, page }))}
          >
            <P.PageinputContainer>
              <P.Pageinput
                id="page"
                type="number"
                placeholder="페이지"
                {...register("page", {
                  required: "페이지를 입력해 주세요.",
                })}
              />
              {errors.page ? (
                <P.Error className="error">{errors.page?.message}</P.Error>
              ) : null}
            </P.PageinputContainer>
            <P.BtnContainer>
              <P.CloseBtn onClick={onCloseModal}>닫기</P.CloseBtn>
              <P.SaveBtn type="submit">저장</P.SaveBtn>
            </P.BtnContainer>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Progress;
