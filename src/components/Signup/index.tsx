import { Link } from "react-router-dom";
import useSignup from "./hook/useSignup";
import * as S from "./style";
const Signup = () => {
  const { register, handleSubmit, errors, submitSignup } = useSignup();

  return (
    <S.Container>
      <S.SignupFormContainer>
        <S.Form
          onSubmit={handleSubmit(({ name, email, password }) =>
            submitSignup({ name, email, password })
          )}
        >
          <S.Title>회원가입</S.Title>
          <S.InputContainer>
            <S.InputLable htmlFor="name">이름</S.InputLable>
            <S.FormInput
              id="name"
              type="text"
              {...register("name", {
                required: "이름은 필수 입력입니다.",
              })}
            />
            {errors.name ? (
              <S.Error className="error">{errors.name?.message}</S.Error>
            ) : null}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLable htmlFor="email">이메일</S.InputLable>
            <S.FormInput
              id="email"
              type="email"
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            {errors.email ? (
              <S.Error className="error">{errors.email?.message}</S.Error>
            ) : null}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLable htmlFor="password">비밀번호</S.InputLable>
            <S.FormInput
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요.",
                },
              })}
            />
            {errors.password ? (
              <S.Error className="error">{errors.password?.message}</S.Error>
            ) : null}
          </S.InputContainer>
          <S.AllowSentence>
            회원가입을 진행함으로서 로운앤퓨처컴퍼니의 개인정보 취급 약관에
            동의합니다.
          </S.AllowSentence>
          <S.SubmitBtn type="submit">회원가입</S.SubmitBtn>
        </S.Form>
        <S.NavContainer>
          <S.NavSentence>
            이미 계정이 있으시다면? <Link to={"/signin"}>로그인</Link>
          </S.NavSentence>
        </S.NavContainer>
      </S.SignupFormContainer>
      <S.Footer>
        Copyright © 2023 — 로운앤퓨처컴퍼니 & 양산시립중앙도서관
      </S.Footer>
    </S.Container>
  );
};

export default Signup;
