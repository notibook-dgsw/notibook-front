import { useLocation } from "react-router-dom";
import { useGetBookInfoQuery } from "../../../quries/bookInfo/bookInfo.query";
import * as B from "./style";
const BookDetail = ({ bookInfodata }: any) => {
  return (
    <B.BookDetailContainer>
      <B.Title>{bookInfodata?.title}</B.Title>
      <B.Detail>
        {`${bookInfodata?.started_at} · 진행도 ${bookInfodata?.progress}% ${bookInfodata?.current_page}/`}
        {!bookInfodata.null && bookInfodata?.all_pages} <br />
        {bookInfodata?.author}
      </B.Detail>
    </B.BookDetailContainer>
  );
};

export default BookDetail;
