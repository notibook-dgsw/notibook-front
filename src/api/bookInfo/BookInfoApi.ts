import customAxios from "../../libs/axios/customAxios";
import {
  bookDetailResponse,
  getBookInfoType,
  postBookNoteType,
} from "../../types/bookInfo/bookInfo.type";
class BookInfoApi {
  public async getBookInfo({
    isbn,
  }: getBookInfoType): Promise<bookDetailResponse> {
    const { data } = await customAxios.get(`/books/${isbn}`);
    console.log("D", data);
    return data;
  }

  public async postBookNote({ isbn, content, page }: postBookNoteType) {
    await customAxios.post(`/books/${isbn}/note`, { content, page });
  }
}

export default new BookInfoApi();
