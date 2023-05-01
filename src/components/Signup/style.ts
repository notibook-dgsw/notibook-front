import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
export const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  height: 65px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
`;

export const FormInput = styled.input`
  width: 300px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  &:focus {
  }
`;

export const InputLable = styled.label`
  display: block;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

export const Error = styled.p`
  color: red;
  margin-top: 3px;
  font-size: 0.5em;
`;

export const Footer = styled.footer`
  font-size: 0.875em;
  color: #6c757d;
  margin-top: 3rem;
`;

export const AllowSentence = styled.p`
  color: #6c757d;
  margin: 0.2rem 0 3rem 0;
  font-size: 0.875em;
`;

export const SubmitBtn = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  width: 325px;
  height: 35px;
  border: none;
  cursor: pointer;
`;

export const NavContainer = styled.div``;
export const NavSentence = styled.p`
  color: #212529;
`;

export const Link = styled.a``;
