import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BookInfoPage from "./pages/BookInfoPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/book/:id" element={<BookInfoPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
