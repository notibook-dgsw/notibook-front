import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BookInfoPage from "./pages/BookInfoPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import WithAuth from "./components/HOC/withAuth";

const Router = () => {
  // const AuthCeckMainPage = WithAuth(MainPage);

  return (
    <Routes>
      {/* <Route path="/" element={<AuthCeckMainPage />} /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/books/:id" element={<BookInfoPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
