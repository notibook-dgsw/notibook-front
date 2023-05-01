import { useForm } from "react-hook-form";
import { postSigninType } from "../../../types/auth/auth.type";
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

  const submitSignin = ({ login_id, password }: postSigninType) => {
    postSigninMutaition.mutate(
      { login_id, password },
      {
        onSuccess: ({ access_token }) => {
          console.log(access_token);
          LocalStorage.set(ACCESS_TOKEN_KEY, access_token);
          navigate("/");
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            window.alert(error.response!.data.message);
          }
        },
      }
    );
  };

  return { register, handleSubmit, errors, submitSignin };
};

export default useSignin;
