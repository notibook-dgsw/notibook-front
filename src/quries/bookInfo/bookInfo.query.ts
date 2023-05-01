import { useQuery } from "@tanstack/react-query";
import BookInfoApi from "../../api/bookInfo/BookInfoApi";
import { getBookInfoType } from "../../types/bookInfo/bookInfo.type";

export const useGetBookInfoQuery = ({ isbn }: getBookInfoType) => {
  useQuery(
    ["useGetBookInfoQuery", isbn],
    () => BookInfoApi.getBookInfo({ isbn }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );
};
