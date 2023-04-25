import { postSigninType, postSignupType } from "../../types/auth/signup.type";
import { customAxios } from "../../libs/axios/customAxios";
import config from "../../config/config.json";
class AuthApi {
  public async postSignup({ name, email, password }: postSignupType) {
    await customAxios.post(`${config.SERVER}/auth/sign-up`, {
      name,
      email,
      password,
    });
  }

  public async postSignin({ email, password }: postSigninType) {
    const { data } = await customAxios.post(`${config.SERVER}/auth/sign-in`, {
      email,
      password,
    });
    return data;
  }
}

export default new AuthApi();
