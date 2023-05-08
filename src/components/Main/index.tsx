import { Link, useParams } from "react-router-dom";
import * as M from "./style";
import profile from "../../asserts/profile.jpg";
import badge1 from "../../asserts/badge1.png";
import badge2 from "../../asserts/badge2.png";
import badge3 from "../../asserts/badge3.png";
import badge4 from "../../asserts/badge4.png";
import badge5 from "../../asserts/badge5.png";
import award from "../../asserts/award.png";
import question from "../../asserts/question.png";
import book from "../../asserts/book.png";
import {
  useGetUserQuery,
  useGetRecomendBookQuery,
} from "../../quries/user/user.query";
import Book from "./Book";
import { BookType, getBooksType } from "../../types/main/user.type";
import BookRecome from "./Recommend";
import { useState } from "react";
import LocalStorage from "../../libs/storage/LocalStorage";
import { ACCESS_TOKEN_KEY } from "../../constant/token/token.constant";

const Main = () => {
  const [isClick, setIsClick] = useState(false);
  const { path } = useParams();
  const { data: booksData } = useGetUserQuery();
  const {
    data: recommendBooks,
    refetch,
    isLoading,
  } = useGetRecomendBookQuery();

  const getRecomendBooks = () => {
    setIsClick(true);
    refetch();
  };

  return (
    <M.Container>
      <input type="checkbox" id="nav" name="nav" />
      <label htmlFor="nav" id="label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <M.Nav id="navbox">
        <div>
          <span>
            <Link to="/">
              <M.Pimg src={profile} alt="profileimage" />
            </Link>
          </span>
          <div>
            <ul>
              <M.Text path={path === "#about"}>
                <a href="#about">내 정보</a>
              </M.Text>
              <M.Text path={path === "#history"}>
                <a href="#history">독서 일지</a>
              </M.Text>
              <M.Text path={path === "#awards"}>
                <a href="#awards">업적</a>
              </M.Text>
              <M.Line />
              <M.Text
                path={path === "#logout"}
                onClick={() => {
                  LocalStorage.remove(ACCESS_TOKEN_KEY);
                }}
              >
                로그아웃
              </M.Text>
            </ul>
          </div>
        </div>
      </M.Nav>
      <M.Myinfo id="about">
        <M.Name>{booksData?.name}</M.Name>
        <M.Book>
          양산시립도서관 · {booksData?.books.length}권을 독서하셨습니다.
        </M.Book>
        <a href="/books/:id">
          <M.Movement src={book} alt="bookid" />
        </a>
      </M.Myinfo>
      <M.Line2 />
      <M.Main id="history">
        <M.Reding>독서일지</M.Reding>
        <M.Bookmark>
          {booksData?.books?.map((bookInfo) => {
            return (
              <Book data={bookInfo} onclick="location.href='/books/:id'" />
            );
          })}
        </M.Bookmark>
      </M.Main>
      <M.Line2 />
      <M.Main id="awards">
        <M.Achieve>내 독서 업적</M.Achieve>
        <M.Title>독서 뱃지</M.Title>
        <M.Badgeline>
          <div>
            <M.Badge src={badge1} alt="badge1" />
          </div>
          <div>
            <M.Badge src={badge2} alt="badge2" />
          </div>
          <div>
            <M.Badge src={badge3} alt="badge3" />
          </div>
          <div>
            <M.Badge src={badge4} alt="badge4" />
          </div>
          <div>
            <M.Badge src={badge5} alt="badge5" />
          </div>
        </M.Badgeline>
        <M.Title>독서 순위</M.Title>
        <M.Badgeline>
          <M.Award src={award} alt="상" />
          <M.Content>2023년도 양산시립도서관 이용자 중 독서량 38위</M.Content>
        </M.Badgeline>
        <M.Recom>
          <M.Title>책 추천</M.Title>
          {/* {recommendBooks?.books?.map((bookTitle) => bookTitle)} */}
          <M.Button type="button" onClick={getRecomendBooks}>
            <M.BtnImg src={question} alt="chatgpt" />
          </M.Button>
        </M.Recom>

        {!isClick ? null : isLoading ? (
          <h1>불러오고 있습니다...</h1>
        ) : (
          recommendBooks?.books?.map((bookTitle) => {
            return <BookRecome data={bookTitle} />;
          })
        )}
      </M.Main>
    </M.Container>
  );
};

export default Main;
