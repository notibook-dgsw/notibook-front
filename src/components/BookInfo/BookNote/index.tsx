import { useLocation } from "react-router-dom";
import useModal from "../../../hook/useModal";
import Modal from "../../common/Modal";
import useBookNote from "./hook/useBookNote";
import * as B from "./style";
import { ImBook } from "react-icons/im";
import BookNoteDetail from "./BookNoteDetail";
const BookNote = ({ bookInfodata }: any) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const isbn = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  const { isOpenBookNoteModal, onOpenBookNoteModal, onCloseBookNoteModal } =
    useModal();
  const { register, handleSubmit, errors, submitBookNote } = useBookNote();
  return (
    <>
      <B.BookNoteContainer>
        <B.TitleBookMark>
          <B.Title>독서노트</B.Title>
          <B.BookMark onClick={onOpenBookNoteModal}>
            <ImBook size={40} />
          </B.BookMark>
        </B.TitleBookMark>
        {bookInfodata?.notes.map((item: any) => {
          return <BookNoteDetail item={item} isbn={isbn} />;
        })}
      </B.BookNoteContainer>
      {isOpenBookNoteModal && (
        <Modal title="독서노트">
          <form
            onSubmit={handleSubmit(({ content, page }) =>
              submitBookNote({ isbn, content, page })
            )}
          >
            <B.PageinputContainer>
            <B.Pageinput
                id="page"
                type="number"
                placeholder="페이지"
                {...register("page", {
                  required: "페이지를 입력해 주세요.",
                })}
              />
              <B.TextArea
                id="content"
                placeholder="노트 할 내용"
                {...register("content", {
                  required: "내용을 입력해 주세요.",
                })}
              ></B.TextArea>
              {errors.content ? (
                <B.Error className="error">{errors.content?.message}</B.Error>
              ) : null}
            </B.PageinputContainer>
            <B.BtnContainer>
              <B.CloseBtn onClick={onCloseBookNoteModal}>닫기</B.CloseBtn>
              <B.SaveBtn type="submit">저장</B.SaveBtn>
            </B.BtnContainer>
          </form>
        </Modal>
      )}
    </>
  );
};

export default BookNote;
