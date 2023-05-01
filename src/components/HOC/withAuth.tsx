import { ComponentType, useEffect } from "react";
import { ACCESS_TOKEN_KEY } from "../../constant/token/token.constant";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../libs/storage/LocalStorage";

const WithAuth = (SpecialComponent: ComponentType) => {
  const AuthenticateCheck = () => {
    const token = LocalStorage.get(ACCESS_TOKEN_KEY);

    if (!token) {
      window.alert("로그인 페이지로 이동합니다.");
      window.location.href = "/signin";
    }

    return <SpecialComponent />;
  };

  return AuthenticateCheck;
};

export default WithAuth;
