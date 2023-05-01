import customAxios from "../../libs/axios/customAxios";
import { getBookInfoType } from "../../types/bookInfo/bookInfo.type";
import { getBooksType } from "../../types/main/user.type";

class UserApi {
  public async getUser(): Promise<getBooksType> {
    const { data } = await customAxios.get(`/user`);
    return data;
  }

  public async getBookrecom(): Promise<string[]> {
    const { data } = await customAxios.get(`/user/recommend`);
    return data;
  }
}

export default new UserApi();
