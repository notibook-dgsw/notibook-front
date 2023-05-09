import styled from "styled-components";
import image1 from "../../asserts/profile.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  #nav {
    display: none;
  }
  #label {
    @media screen and (min-width: 1110px) {
      display: none;
      height: 50vw;
    }
    z-index: 110;
    top: 3vw;
    right: 3vw;
    display: inline-block;
    width: 8vw;
    height: 5vw;
    margin-top: 2vw;
    position: fixed;
    margin-left: 3vw;
    span {
      transition: all 1s;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 0.8vw;
      background-color: black;
      border-radius: 2px;
    }
    span:nth-child(1) {
      top: 0;
    }
    span:nth-child(2) {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    span:nth-child(3) {
      bottom: 0;
    }
  }
  #nav:checked ~ #navbox > div {
    transform: translateY(100%);
  }
  #nav:checked ~ #label span {
    background-color: white;
  }
  #nav:checked ~ #label span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
    top: 50%;
  }
  #nav:checked ~ #label span:nth-child(2) {
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  #nav:checked ~ #label span:nth-child(3) {
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  /* @media all and (max-width: 768px) {
  } */
`;

export const Nav = styled.div`
  box-sizing: border-box;
  background-color: #20c997;
  text-align: center;
  position: fixed;
  top: 0%;
  left: 0;
  width: 17%;
  height: 100vh;
  @media screen and (min-width: 1110px) {
    > div {
      transform: translate(0) !important;
    }
  }
  @media screen and (max-width: 1110px) {
    transform: translateY(-100%);
    width: 100%;
    z-index: 100;
    height: 15vw;
    > div {
      transition: all 1s;
      background-color: #20c997;
      box-sizing: border-box;
      justify-content: space-between;
      display: flex;
      padding: 2% 15% 2% 10%;
      width: 100%;
      height: 100%;
    }
    img {
      margin-top: 0px;
      border: 1vw solid rgb(32, 215, 165);
    }
    ul {
      display: flex;
      width: 45vw;
      justify-content: space-between;
      padding-top: 1vw;
      line-height: 10vw;
      li {
        margin-top: 0;
      }
    }
    hr {
      display: none;
    }
  }
`;

export const Pimg = styled.img.attrs({
  src: `${image1}`,
})`
  margin-top: 270px;
  width: 10vw;
  height: 10vw;
  border-radius: 100px;
  border: 7px solid #20d7a5;
`;

export const Text = styled.li<{ path: boolean }>`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 800;
  @media screen and (max-width: 1110px) {
    font-size: 2.2vw;
  }
  color: ${({ path }) => (path ? "#ffffff" : "#dedede")};
  a {
    text-decoration: none;
    color: #dedede;
  }
`;

export const Line = styled.hr`
  width: 90%;
  color: green;
`;

export const Myinfo = styled.div`
  width: 55%;
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
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
    white-space: pre-line;
  }
`;

export const Book = styled.span`
  margin-top: 30px;
  font-size: 1.5rem;
  color: #6c757d;
`;

export const Line2 = styled.hr`
  color: green;
`;

export const Main = styled.div`
  width: 55%;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Reding = styled.div`
  padding-top: 35%;
  font-size: 3.5rem;
  font-weight: bolder;
  color: #343a40;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Bookmark = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
`;

export const Achieve = styled.div`
  padding-top: 20%;
  font-size: 3.5rem;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Title = styled.div`
  margin-top: 40px;
  color: gray;
  font-size: 1.5rem;
`;

export const Badgeline = styled.ul`
  width: 100%;
  display: inline-block;
  div {
    display: inline-block;
  }
`;

export const Badge = styled.img.attrs({})`
  margin-top: 10px;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 1110px) {
    width: 10vw;
    height: 10vw;
  }
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
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 768px) {
    padding-left: 50%;
  }
`;

export const BtnImg = styled.img.attrs({})`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 768px) {
    width: 8vw;
    height: 8vw;
  }
`;

export const ChatRecom = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;
