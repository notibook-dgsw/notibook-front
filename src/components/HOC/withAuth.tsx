import { ACCESS_TOKEN_KEY } from "../../constant/token/token.constant";
import LocalStorage from "../../libs/storage/LocalStorage";

const withAuth = (AuthComponent: () => JSX.Element) => {
  if (LocalStorage.get(ACCESS_TOKEN_KEY) === null) {
    window.alert("토큰이 존재하지 않습니다.");
    window.location.href = "/signin";
    return <></>;
  }

  return <AuthComponent />;
};

export default withAuth;
