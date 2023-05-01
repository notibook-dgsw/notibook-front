import { postSigninType, postSignupType } from "../../types/auth/auth.type";
import { customAxios } from "../../libs/axios/customAxios";
class AuthApi {
  public async postSignup({ login_id, name, password }: postSignupType) {
    await customAxios.post("/auth/sign-up", {
      login_id,
      name,
      password,
    });
  }

  public async postSignin({ login_id, password }: postSigninType) {
    const { data } = await customAxios.post("/auth/sign-in", {
      login_id,
      password,
    });
    return data;
  }
}

export default new AuthApi();
