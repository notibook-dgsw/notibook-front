import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  color: #343a40;
  margin-bottom: 15px;
  font-weight: 900;
  @media all and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Detail = styled.p`
  font-size: 1.15rem;
  font-weight: 400;
`;

export const ProgressStart = styled.div`
  background-color: #6c757d;

  width: 25px;
  height: 25px;
  border-radius: 100px;
`;

export const BookInfoCotnainer = styled.div`
  padding: 40px 48px;
  margin-left: 280px;
  height: 950px;
  @media all and (max-width: 768px) {
    margin-left: 0;
  }
`;
