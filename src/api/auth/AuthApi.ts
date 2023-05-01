import { postSigninType, postSignupType } from "../../types/auth/auth.type";
import { customAxios } from "../../libs/axios/customAxios";
class AuthApi {
  public async postSignup({ name, email, password }: postSignupType) {
    await customAxios.post("/auth/sign-up", {
      name,
      email,
      password,
    });
  }

  public async postSignin({ email, password }: postSigninType) {
    const { data } = await customAxios.post("/auth/sign-in", {
      email,
      password,
    });
    return data;
  }
}

export default new AuthApi();
