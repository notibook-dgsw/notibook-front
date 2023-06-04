import { Link } from "react-router-dom";
import useSignin from "./hook/useSignin";
import * as S from "./style";
const Signin = () => {
  const { register, handleSubmit, errors, submitSignin } = useSignin();

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
          <S.SubmitBtn type="submit">로그인</S.SubmitBtn>
        </S.Form>
        <S.NavContainer>
          <S.NavSentence>
            계정이 없으시다면? <Link to={"/signup"}>회원가입</Link>
          </S.NavSentence>
        </S.NavContainer>
      </S.SignupFormContainer>
      <S.Footer>
        Notibook - 대구소프트웨어마이스터고등학교 & 문산수억고등학교
      </S.Footer>
    </S.Container>
  );
};

export default Signin;
