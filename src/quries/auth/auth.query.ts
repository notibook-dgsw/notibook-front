import { useMutation } from "@tanstack/react-query";
import { postSigninType, postSignupType } from "../../types/auth/auth.type";
import AuthApi from "../../api/auth/AuthApi";

export const usePostSignupMutation = () => {
  const mutation = useMutation(({ name, email, password }: postSignupType) =>
    AuthApi.postSignup({ name, email, password })
  );
  return mutation;
};

export const usePostSigninMutation = () => {
  const mutation = useMutation(({ email, password }: postSigninType) =>
    AuthApi.postSignin({ email, password })
  );
  return mutation;
};
