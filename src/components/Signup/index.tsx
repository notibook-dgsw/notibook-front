import { Link } from "react-router-dom";
import useSignup from "./hook/useSignup";
import * as S from "./style";
import PrivacyText from "./Privacy";
import { useState } from "react";
const Signup = () => {
  const { register, handleSubmit, errors, submitSignup } = useSignup();
  const [ isAllowed, setIsAllowed ] = useState(false)

  return (
    <S.Container>
      <S.SignupFormContainer>
        <S.Form
          onSubmit={handleSubmit(({ login_id, name, password }) =>
            submitSignup({ login_id, name, password })
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
            <S.InputLable htmlFor="login_id">이메일</S.InputLable>
            <S.FormInput
              id="login_id"
              type="email"
              {...register("login_id", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
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
            회원가입을 진행함으로서 Notibook 서비스의 개인정보수집이용동의서에 동의하는 것으로 간주합니다. 동의하시면 회원가입 버튼이 활성화됩니다.
          </S.AllowSentence>
          <textarea style={{ height: '100px', overflowY:'scroll' }} readOnly>{PrivacyText}</textarea>
          <div style={{ marginBottom: '15px' }}>
          <input type="checkbox" onChange={(ev) => {
            setIsAllowed(ev.target.checked)
          }}></input> 개인정보수집이용동의서에 동의합니다
          </div>
          <S.SubmitBtn type="submit" disabled={!isAllowed} style={{ backgroundColor: isAllowed ? undefined : 'gray' }}>회원가입</S.SubmitBtn>
        </S.Form>
        <S.NavContainer>
          <S.NavSentence>
            이미 계정이 있으시다면? <Link to={"/signin"}>로그인</Link>
          </S.NavSentence>
        </S.NavContainer>
      </S.SignupFormContainer>
      <S.Footer>
        Notibook - 대구소프트웨어마이스터고등학교 & 문산수억고등학교
      </S.Footer>
    </S.Container>
  );
};

export default Signup;
