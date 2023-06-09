import { useEffect } from "react";
import useModal from "../../../hook/useModal";
import Modal from "../../common/Modal";
import * as P from "./style";
import { BsBookmarkPlusFill } from "react-icons/bs";
import useProgress from "./hook/useProgress";
import { useLocation } from "react-router-dom";
import { useGetBookInfoQuery } from "../../../quries/bookInfo/bookInfo.query";
const Progress = ({ bookInfodata }: any) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const isbn = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  // const { data: bookInfodata } = useGetBookInfoQuery({ isbn });
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { register, handleSubmit, errors, submitSave } = useProgress();

  console.log(bookInfodata);
  return (
    <>
      <P.ProgressCotnainer>
        <P.TitleBookMark>
          <P.Title>진행도</P.Title>
          <P.BookMark onClick={onOpenModal}>
            <BsBookmarkPlusFill size={40} />
          </P.BookMark>
        </P.TitleBookMark>
        <P.ProgressBarContainer>
          <div>
            {bookInfodata?.history.map((item: any) => {
              console.log("1", item);
              return (
                <div>
                  <P.ProgressStart />
                  <P.ProgressBar />
                </div>
              );
            })}
          </div>
          <div>
            {bookInfodata?.history.map((item: any) => {
              console.log("1", item);
              return (
                <P.ProgressListContainer>
                  <P.ProgressList>{`${item.created_at} ${item.page}p`}</P.ProgressList>
                </P.ProgressListContainer>
              );
            })}
          </div>
        </P.ProgressBarContainer>
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
