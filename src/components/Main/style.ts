import styled from "styled-components";
import image1 from "../../asserts/profile.jpg";

export const Container = styled.div``;

export const Nav = styled.div`
  background-color: #20c997;
  text-align: center;
  position: fixed;
  top: 0%;
  left: 0;
  width: 280px;
  height: 100vh;
`;

export const Pimg = styled.img.attrs({
  src: `${image1}`,
})`
  margin-top: 270px;
  width: 180px;
  height: 180px;
  border-radius: 100px;
  border: 7px solid #20d7a5;
`;

export const Text = styled.li<{ path: boolean }>`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 800;

  color: ${({ path }) => (path ? "#ffffff" : "#dedede")};
  a {
    text-decoration: none;
    color: #dedede;
  }
`;

export const Line = styled.hr`
  width: 280px;
  color: green;
`;

export const Myinfo = styled.div`
  width: 1110px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Name = styled.h1`
  padding-top: 35%;
  font-size: 6rem;
  font-weight: bolder;
  color: #343a40;
`;

export const Book = styled.span`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #6c757d;
`;

export const Movement = styled.img.attrs({})`
  width: 40px;
  height: 40px;
  margin-top: 30px;
`;

export const Line2 = styled.hr`
  color: green;
`;

export const Main = styled.div`
  width: 1110px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Reding = styled.div`
  padding-top: 35%;
  font-size: 3.5rem;
  font-weight: bolder;
  color: #343a40;
`;

export const Bookmark = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
`;

export const Achieve = styled.div`
  padding-top: 20%;
  font-size: 3.5rem;
  font-weight: bold;
`;

export const Title = styled.div`
  margin-top: 40px;
  color: gray;
  font-size: 1.5rem;
`;

export const Badgeline = styled.ul`
  display: flex;
  text-align: center;
`;

export const Badge = styled.img.attrs({})`
  margin-top: 20px;
  margin-right: 15px;
  width: 60px;
  height: 60px;
`;

export const Award = styled.img.attrs({})`
  margin-top: 10px;
  width: 35px;
  height: 35px;
  padding-right: 10px;
`;

export const Content = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

export const Recom = styled.div``;

export const Button = styled.button`
  background-color: white;
  border-radius: 70px;
  border: none;
  position: absolute;
  right: 0;
  margin-right: 400px;
`;

export const BtnImg = styled.img.attrs({})`
  width: 40px;
  height: 40px;
`;
