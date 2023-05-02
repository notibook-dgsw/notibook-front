import { useParams } from "react-router-dom";
import * as N from "./style";
import { Link } from "react-router-dom";
const Nav = () => {
  const { path } = useParams();

  return (
    <N.Nav>
      <div>
        <ul>
          <N.Text path={path === "#about"}>
            <Link to="#about">내 정보</Link>
          </N.Text>
          <N.Text path={path === "#history"}>
            <Link to="#history">독서 일지</Link>
          </N.Text>
          <N.Text path={path === "#awards"}>
            <Link to="#awards">업적</Link>
          </N.Text>
          <N.Line />
          <N.Text path={path === "#logout"}>
            <Link to="/logout">로그아웃</Link>
          </N.Text>
        </ul>
      </div>
    </N.Nav>
  );
};

export default Nav;
