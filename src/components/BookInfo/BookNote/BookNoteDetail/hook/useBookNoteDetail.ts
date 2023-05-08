import { useForm } from "react-hook-form";
import {
  deleteBookNoteType,
  patchBookNoteType,
} from "../../../../../types/bookInfo/bookInfo.type";
import {
  useDeleteBookNoteMutation,
  usePatchBookNoteMutation,
  usePostBookNoteMutation,
} from "../../../../../quries/bookInfo/bookNote.query";
import useModal from "../../../../../hook/useModal";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";

const useBookNoteDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<patchBookNoteType>();
  const { onCloseBookNoteDetailModal } = useModal();

  const patchBookNoteMutation = usePatchBookNoteMutation();
  const deleteBookNoteMutation = useDeleteBookNoteMutation();

  const queryClient = useQueryClient();

  const submitBookNoteEdit = ({ isbn, content, page }: patchBookNoteType) => {
    patchBookNoteMutation.mutate(
      { isbn, page, content },
      {
        onSuccess: () => {
          onCloseBookNoteDetailModal();
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

  const deleteBookNote = ({ isbn, page }: deleteBookNoteType) => {
    deleteBookNoteMutation.mutate(
      { isbn, page },
      {
        onSuccess: () => {
          onCloseBookNoteDetailModal();
          queryClient.invalidateQueries({ queryKey: ["useGetBookInfoQuery"] });
          window.alert("삭제되었습니다");
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            window.alert(error.response!.data.message);
          }
        },
      }
    );
  };

  return { register, handleSubmit, errors, submitBookNoteEdit, deleteBookNote };
};

export default useBookNoteDetail;
