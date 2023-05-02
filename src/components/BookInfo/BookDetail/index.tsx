import { useGetBookInfoQuery } from "../../../quries/bookInfo/bookInfo.query";
import * as B from "./style";
const BookDetail = ({ isbn }: any) => {
  const { data: bookInfodata } = useGetBookInfoQuery({ isbn });
  return (
    <B.BookDetailContainer>
      <B.Title>{bookInfodata?.title}</B.Title>
      {bookInfodata && (
        <B.Detail>{`${bookInfodata?.started_at} · 진행도 ${bookInfodata?.progress}% ${bookInfodata?.current_page}/${bookInfodata?.all_pages} ${bookInfodata?.author}`}</B.Detail>
      )}
    </B.BookDetailContainer>
  );
};

export default BookDetail;
