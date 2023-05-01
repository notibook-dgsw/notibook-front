import { useLocation } from "react-router-dom";
import { useGetBookInfoQuery } from "../../quries/bookInfo/bookInfo.query";

const BookInfo = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const isbn = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  const bookInfodata = useGetBookInfoQuery({ isbn });
  console.log(bookInfodata);
  return <div>my</div>;
};

export default BookInfo;
