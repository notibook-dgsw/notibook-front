import * as B from "./style";
const BookDetail = ({ bookInfodata }: any) => {
  return (
    <B.BookDetailContainer>
      <B.Title>{bookInfodata?.title}</B.Title>
      <B.Detail>{`${bookInfodata?.started_at} · 진행도 ${bookInfodata?.progress}% ${bookInfodata?.current_page}/${bookInfodata?.all_pages} ${bookInfodata?.author}`}</B.Detail>
    </B.BookDetailContainer>
  );
};

export default BookDetail;
