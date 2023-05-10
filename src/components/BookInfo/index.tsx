import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useGetBookInfoQuery } from "../../quries/bookInfo/bookInfo.query";
import * as B from "./style";
import Progress from "./Progress";
import BookDetail from "./BookDetail";
import BookNote from "./BookNote";
import Nav from "./Nav";
import { useEffect, useState } from "react";
const BookInfo = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const isbn = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  const { data: bookInfodata } = useGetBookInfoQuery({ isbn });

  return (
    <B.BookInfoCotnainer>
      {/* <Nav /> */}
      <Link style={{ textDecoration: "none" }} to={"/"}>
        홈으로 이동
      </Link>
      {bookInfodata?.author === undefined ? (
        <p>로딩중</p>
      ) : (
        <>
          <BookDetail bookInfodata={bookInfodata} />
          <Progress bookInfodata={bookInfodata} />
          <BookNote bookInfodata={bookInfodata} />
        </>
      )}
    </B.BookInfoCotnainer>
  );
};

export default BookInfo;
