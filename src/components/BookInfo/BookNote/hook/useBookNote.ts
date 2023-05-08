import { useForm } from "react-hook-form";
import {
  deleteBookNoteType,
  postBookHistoryType,
  postBookNoteType,
} from "../../../../types/bookInfo/bookInfo.type";
import { usePostBookHistoryMutation } from "../../../../quries/bookInfo/bookHistory.query";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import useModal from "../../../../hook/useModal";
import {
  useDeleteBookNoteMutation,
  usePostBookNoteMutation,
} from "../../../../quries/bookInfo/bookNote.query";

const useBookNote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postBookNoteType>();
  const { onCloseBookNoteModal } = useModal();
  const postBookNoteMutation = usePostBookNoteMutation();

  const queryClient = useQueryClient();

  const submitBookNote = ({ isbn, content, page }: postBookNoteType) => {
    postBookNoteMutation.mutate(
      { isbn, content, page },
      {
        onSuccess: () => {
          onCloseBookNoteModal();
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

  

  return { register, handleSubmit, errors, submitBookNote };
};

export default useBookNote;
