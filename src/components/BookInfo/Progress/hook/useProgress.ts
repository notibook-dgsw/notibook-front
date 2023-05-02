import { useForm } from "react-hook-form";
import { postBookHistoryType } from "../../../../types/bookInfo/bookInfo.type";
import { usePostBookHistoryMutation } from "../../../../quries/bookInfo/bookHistory.query";
import { AxiosError } from "axios";
import { useSetRecoilState } from "recoil";
import { isOpenModalAtom } from "../../../../store/modalStore";
import { useQueryClient } from "@tanstack/react-query";
import useModal from "../../../../hook/useModal";

const useProgress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postBookHistoryType>();
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const postBookHistoryMutaition = usePostBookHistoryMutation();

  const queryClient = useQueryClient();

  const submitSave = ({ isbn, page }: postBookHistoryType) => {
    postBookHistoryMutaition.mutate(
      { isbn, page },
      {
        onSuccess: () => {
          onCloseModal();
          queryClient.invalidateQueries({ queryKey: ["useGetBookInfoQuery"] });
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            window.alert(error.response!.data.message);
          }
        },
      }
    );
  };

  return { register, handleSubmit, errors, submitSave };
};

export default useProgress;
