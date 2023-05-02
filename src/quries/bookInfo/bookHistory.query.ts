import { useMutation } from "@tanstack/react-query";
import BookProgressApi from "../../api/bookInfo/BookProgressApi";
import { postBookHistoryType } from "../../types/bookInfo/bookInfo.type";

export const usePostBookHistoryMutation = () => {
  const mutation = useMutation(({ isbn, page }: postBookHistoryType) =>
    BookProgressApi.postBookHistory({ isbn, page })
  );
  return mutation;
};
