import { Link } from "react-router-dom";
import useSignin from "./hook/useSignin";
import * as S from "./style";
import { useEffect } from "react";
const Signin = () => {
  const { register, handleSubmit, errors, submitSignin } = useSignin();

  useEffect(() => {
    submitSignin({ login_id: "test@gmail.com", password: "12345678" });
  }, []);
  return (
    <S.Container>
      <S.SignupFormContainer>
        <S.Form
          onSubmit={handleSubmit(({ login_id, password }) =>
            submitSignin({ login_id, password })
          )}
        >
          <S.Title>로그인</S.Title>
          <S.InputContainer>
            <S.InputLable htmlFor="email">이메일</S.InputLable>
            <S.FormInput
              id="login_id"
              type="email"
              {...register("login_id", {
                required: "이메일은 필수 입력입니다.",
              })}
            />
            {errors.login_id ? (
              <S.Error className="error">{errors.login_id?.message}</S.Error>
            ) : null}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLable htmlFor="password">비밀번호</S.InputLable>
            <S.FormInput
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
              })}
            />
            {errors.password ? (
              <S.Error className="error">{errors.password?.message}</S.Error>
            ) : null}
          </S.InputContainer>
          <S.AllowSentence>
            * 노티북 서비스는 양산시립도서관 계정과 연동되지 않습니다. 별도의
            회원가입을 진행해주세요.
          </S.AllowSentence>
          <S.SubmitBtn type="submit">로그인</S.SubmitBtn>
        </S.Form>
        <S.NavContainer>
          <S.NavSentence>
            계정이 없으시다면? <Link to={"/signup"}>회원가입</Link>
          </S.NavSentence>
        </S.NavContainer>
      </S.SignupFormContainer>
      <S.Footer>
        Copyright © 2023 — 로운앤퓨처컴퍼니 & 양산시립중앙도서관
      </S.Footer>
    </S.Container>
  );
};

export default Signin;
