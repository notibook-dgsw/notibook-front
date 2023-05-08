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

export const BookNoteContainer = styled.div`
  height: 100vh;
  border-bottom: 1px solid #6c756c;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media all and (max-width: 768px) {
    height: 50vh;
  }
`;

export const TitleBookMark = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const BookMark = styled.div`
  cursor: pointer;
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

export const Pageinput = styled.input`
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  width: 80%;
`;

export const PageinputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  flex-direction: column;
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

export const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  resize: none;
  margin-bottom: 10px;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const BookNoteItem = styled.div`
  margin-bottom: 20px;
`;

export const NoteTitle = styled.h1`
  font-size: 1.2rem;
`;

export const NoteDetial = styled.p`
  color: #6c757d;
`;

export const DeleteBtn = styled.button`
  color: #fff;
  background-color: #dc3545;
  margin: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;
