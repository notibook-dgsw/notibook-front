import { customAxios } from "../../libs/axios/customAxios";
import { getBookInfoType } from "../../types/bookInfo/bookInfo.type";
class BookInfoApi {
  public async getBookInfo({ isbn }: getBookInfoType): Promise<any> {
    const { data } = await customAxios.get(`/books/${isbn}`);
    return data;
  }
}

export default new BookInfoApi();
