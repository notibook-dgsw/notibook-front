import { useForm } from "react-hook-form";
import { postSignupType } from "../../../types/auth/auth.type";
import { usePostSignupMutation } from "../../../quries/auth/auth.query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const useSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postSignupType>();

  const postSignupMutaition = usePostSignupMutation();
  const navigate = useNavigate();

  const submitSignup = ({ login_id, name, password }: postSignupType) => {
    postSignupMutaition.mutate(
      { login_id, name, password },
      {
        onSuccess: () => {
          navigate("/signin");
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            window.alert(error.response!.data.message);
          }
        },
      }
    );
  };

  return { register, handleSubmit, errors, submitSignup };
};

export default useSignup;
