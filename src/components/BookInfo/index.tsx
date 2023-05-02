import { useLocation } from "react-router-dom";
import { useGetBookInfoQuery } from "../../quries/bookInfo/bookInfo.query";
import * as B from "./style";
import Progress from "./Progress";
import BookDetail from "./BookDetail";
import BookNote from "./BookNote";
import Nav from "./Nav";
const BookInfo = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const isbn = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  return (
    <B.BookInfoCotnainer>
      <Nav />
      <BookDetail isbn={isbn} />
      <Progress isbn={isbn} />
      <BookNote />
    </B.BookInfoCotnainer>
  );
};

export default BookInfo;
