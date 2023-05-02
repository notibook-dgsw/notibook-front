import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: white;
  position: absolute;
  width: 50%;
  z-index: 999;
  @media all and (max-width: 768px) {
    width: 90%;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const TitleContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
`;

export const CloseBtn = styled.button`
  color: #fff;
  background-color: #6c757d;
  margin: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
`;

export const SaveBtn = styled.button`
  color: #fff;
  background-color: #bd5d38;
  margin: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px;
`;

export const ChildrenContainer = styled.div`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
`;
