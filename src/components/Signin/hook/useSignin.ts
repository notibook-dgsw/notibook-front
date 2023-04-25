import { useForm } from "react-hook-form";
import { postSigninType } from "../../../types/auth/signup.type";
import { usePostSigninMutation } from "../../../quries/auth/auth.query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import LocalStorage from "../../../libs/storage/LocalStorage";
import { ACCESS_TOKEN_KEY } from "../../../constant/token/token.constant";

const useSignin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postSigninType>();

  const postSigninMutaition = usePostSigninMutation();
  const navigate = useNavigate();

  const submitSignin = ({ email, password }: postSigninType) => {
    postSigninMutaition.mutate(
      { email, password },
      {
        onSuccess: ({ token }) => {
          LocalStorage.set(ACCESS_TOKEN_KEY, token);
          navigate("/");
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            window.alert(error.response!.data.details);
          }
        },
      }
    );
  };

  return { register, handleSubmit, errors, submitSignin };
};

export default useSignin;
