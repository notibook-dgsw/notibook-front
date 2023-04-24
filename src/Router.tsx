import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyInfoPage from "./pages/MyInfoPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/my" element={<MyInfoPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
