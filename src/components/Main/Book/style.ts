import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #20d7a5;
  font-weight: 400px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Author = styled.div`
  margin-right: 10px;
`;

export const Started_at = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: gray;
`;

export const Progress = styled.div`
  font-size: 1.1rem;
  margin-right: 10px;
`;

export const Page = styled.div``;

export const Hr = styled.hr`
  width: 90%;
  margin: 20px 0 0 0;
`;
