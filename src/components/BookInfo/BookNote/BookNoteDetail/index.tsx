import React from "react";
import * as B from "./style";
import useModal from "../../../../hook/useModal";
import useBookNote from "../hook/useBookNote";
import Modal from "../../../common/Modal";
import useBookNoteDetail from "./hook/useBookNoteDetail";
import { deleteBookNoteType } from "../../../../types/bookInfo/bookInfo.type";
const BookNoteDetail = ({ item, isbn }: any) => {
  const {
    isOpenBookNoteDetailModal,
    onOpenBookNoteDetailModal,
    onCloseBookNoteDetailModal,
  } = useModal();

  const { register, handleSubmit, errors, submitBookNoteEdit, deleteBookNote } =
    useBookNoteDetail();

  let page = item.page;
  return (
    <>
      <B.BookNoteItem onClick={onOpenBookNoteDetailModal}>
        <B.NoteTitle>{item.content}</B.NoteTitle>
        <B.NoteDetial>
          {item.page}p {item.modified_at}
        </B.NoteDetial>
      </B.BookNoteItem>
      {isOpenBookNoteDetailModal && (
        <Modal title="독서노트 수정">
          <form
            onSubmit={handleSubmit(({ content }) =>
              submitBookNoteEdit({ isbn, content, page })
            )}
          >
            <B.PageinputContainer>
              <B.TextArea
                id="content"
                {...register("content", {
                  required: "내용을 입력해 주세요.",
                })}
              >
                {item.content}
              </B.TextArea>
              {errors.content ? (
                <B.Error className="error">{errors.content?.message}</B.Error>
              ) : null}
            </B.PageinputContainer>
            <B.BtnContainer>
              <B.CloseBtn onClick={onCloseBookNoteDetailModal}>닫기</B.CloseBtn>
              <B.DeleteBtn onClick={() => deleteBookNote({ isbn, page })}>
                삭제
              </B.DeleteBtn>
              <B.SaveBtn type="submit">수정</B.SaveBtn>
            </B.BtnContainer>
          </form>
        </Modal>
      )}
    </>
  );
};

export default BookNoteDetail;
