import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  color: #343a40;
  margin-bottom: 25px;
  font-weight: 900;

  @media all and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Detail = styled.p`
  color: #6c757d;
  font-size: 1.15rem;
  font-weight: 400;
`;

export const ProgressStart = styled.div`
  background-color: #3eb489;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  border-radius: 100px;
`;
export const ProgressBar = styled.div`
  background-color: #3eb489;
  margin-left: 18.5px;
  width: 5px;
  height: 85%;
`;

export const ProgressCotnainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border-bottom: 1px solid #6c756c;
  @media all and (max-width: 768px) {
    height: 50vh;
  }
`;

export const ProgressBtn = styled.button``;

export const TitleBookMark = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

export const BookMark = styled.div`
  cursor: pointer;
`;

export const Pageinput = styled.input`
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  width: 200px;
`;

export const PageinputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const CloseBtn = styled.button`
  color: #fff;
  background-color: #6c757d;
  margin: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  color: #fff;
  background-color: #bd5d38;
  margin: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Error = styled.p`
  color: red;
  margin-top: 3px;
  font-size: 0.5em;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  height: auto;
`;

export const ProgressListContainer = styled.div`
  width: 150px;
`;

export const ProgressList = styled.p`
  width: 150px;
  height: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`;
