import customAxios from "../../libs/axios/customAxios";
import { postBookNoteType } from "../../types/bookInfo/bookInfo.type";
class BookNoteApi {
  public async postBookNote({ isbn, content, page }: postBookNoteType) {
    await customAxios.post(`/books/${isbn}/note`, { content, page });
  }
}

export default new BookNoteApi();
