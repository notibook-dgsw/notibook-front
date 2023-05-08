import customAxios from "../../libs/axios/customAxios";
import { deleteBookNoteType, postBookNoteType } from "../../types/bookInfo/bookInfo.type";
class BookNoteApi {
  public async postBookNote({ isbn, content, page }: postBookNoteType) {
    await customAxios.post(`/books/${isbn}/note`, { content, page });
  }

  public async patchBookNote({ isbn, page, content }: postBookNoteType) {
    await customAxios.patch(`/books/${isbn}/note/${page}`, { content });
  }

  public async deleteBookNote({ isbn, page }: deleteBookNoteType) {
    await customAxios.delete(`/books/${isbn}/note/${page}`);
  }
}

export default new BookNoteApi();
