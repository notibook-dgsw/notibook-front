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
  margin-left: 10px;
  padding-right: 25px;
`;

export const BookDetailContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #6c756c;
  @media all and (max-width: 768px) {
    height: 50vh;
  }
`;
