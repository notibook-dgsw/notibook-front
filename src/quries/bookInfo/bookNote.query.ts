import { useMutation } from "@tanstack/react-query";
import {
  deleteBookNoteType,
  patchBookNoteType,
  postBookNoteType,
} from "../../types/bookInfo/bookInfo.type";
import BookNoteApi from "../../api/bookInfo/BookNoteApi";

export const usePostBookNoteMutation = () => {
  const mutation = useMutation(({ isbn, content, page }: postBookNoteType) =>
    BookNoteApi.postBookNote({ isbn, content, page })
  );
  return mutation;
};

export const usePatchBookNoteMutation = () => {
  const mutation = useMutation(({ isbn, page, content }: patchBookNoteType) =>
    BookNoteApi.patchBookNote({ isbn, page, content })
  );
  return mutation;
};

export const useDeleteBookNoteMutation = () => {
  const mutation = useMutation(({ isbn, page }: deleteBookNoteType) =>
    BookNoteApi.deleteBookNote({ isbn, page })
  );
  return mutation;
};
