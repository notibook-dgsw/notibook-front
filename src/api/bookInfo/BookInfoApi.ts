import customAxios from "../../libs/axios/customAxios";
import {
  bookDetailResponse,
  getBookInfoType,
} from "../../types/bookInfo/bookInfo.type";
class BookInfoApi {
  public async getBookInfo({
    isbn,
  }: getBookInfoType): Promise<bookDetailResponse> {
    const { data } = await customAxios.get(`/books/${isbn}`);
    console.log("D", data);
    return data;
  }
}

export default new BookInfoApi();
