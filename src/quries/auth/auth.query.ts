import { useMutation } from "@tanstack/react-query";
import { postSigninType, postSignupType } from "../../types/auth/auth.type";
import AuthApi from "../../api/auth/AuthApi";

export const usePostSignupMutation = () => {
  const mutation = useMutation(
    ({ name,login_id, password }: postSignupType) =>
      AuthApi.postSignup({ name,login_id,  password })
  );
  return mutation;
};

export const usePostSigninMutation = () => {
  const mutation = useMutation(({ login_id, password }: postSigninType) =>
    AuthApi.postSignin({ login_id, password })
  );
  return mutation;
};
