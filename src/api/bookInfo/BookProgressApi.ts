import customAxios from "../../libs/axios/customAxios";
import {
  postBookHistoryType,
  postBookNoteType,
} from "../../types/bookInfo/bookInfo.type";
class BookHistoryApi {
  public async postBookHistory({ isbn, page }: postBookHistoryType) {
    await customAxios.post(`/books/${isbn}/history`, { page });
  }
}

export default new BookHistoryApi();
