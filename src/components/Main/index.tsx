import { Link, useParams } from "react-router-dom";
import useUser from "./hook/useUser";
import * as M from "./style";
import profile from "../../asserts/profile.jpg";
import badge1 from "../../asserts/badge1.png";
import badge2 from "../../asserts/badge2.png";
import badge3 from "../../asserts/badge3.png";
import badge4 from "../../asserts/badge4.png";
import badge5 from "../../asserts/badge5.png";
import award from "../../asserts/award.png";
import question from "../../asserts/question.png";
import {
  useGetUserQuery,
  useGetRecomendBookQuery,
} from "../../quries/user/user.query";
import Book from "./Book";
import { BookType, getBooksType } from "../../types/main/user.type";

const Main = () => {
  const { path } = useParams();
  const { data: booksData } = useGetUserQuery();
  const { data: recommendBooks } = useGetRecomendBookQuery();

  return (
    <M.Container>
      <M.Nav>
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
            <M.Text path={path === "#logout"}>
              <a href="/logout">로그아웃</a>
            </M.Text>
          </ul>
        </div>
      </M.Nav>
      <M.Myinfo id="about">
        <M.Name>{booksData?.name}</M.Name>
        <M.Book>
          양산시립도서관 · {booksData?.books.length}권을 독서하셨습니다.
        </M.Book>
      </M.Myinfo>
      <M.Line2 />
      <M.Main id="history">
        <M.Reding>독서일지</M.Reding>
        <M.Bookmark>
          {booksData?.books?.map((bookInfo) => {
            return <Book data={bookInfo} />;
          })}
        </M.Bookmark>
      </M.Main>
      <M.Line2 />
      <M.Main id="awards">
        <M.Achieve>내 독서 업적</M.Achieve>
        <M.Title>독서 뱃지</M.Title>
        <M.Badgeline>
          <li>
            <M.Badge src={badge1} alt="badge1" />
          </li>
          <li>
            <M.Badge src={badge2} alt="badge2" />
          </li>
          <li>
            <M.Badge src={badge3} alt="badge3" />
          </li>
          <li>
            <M.Badge src={badge4} alt="badge4" />
          </li>
          <li>
            <M.Badge src={badge5} alt="badge5" />
          </li>
        </M.Badgeline>
        <M.Title>독서 순위</M.Title>
        <M.Badgeline>
          <M.Award src={award} alt="상" />
          <M.Content>2023년도 양산시립도서관 이용자 중 독서량 38위</M.Content>
        </M.Badgeline>
        <M.Recom>
          <M.Title>책 추천</M.Title>
          {recommendBooks?.map((bookTitle) => bookTitle)}
          <M.Button type="button">
            <M.BtnImg src={question} alt="chatgpt" />
          </M.Button>
        </M.Recom>
      </M.Main>
    </M.Container>
  );
};

export default Main;
