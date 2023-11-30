import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Profile from "pages/Profile";
import ProtectedRoute from "components/ProtectedRoute";
import { useSelector } from "react-redux";

const Router = () => {
  const successLogin = useSelector((state) => state.auth.isAuthenticated);
  console.log(successLogin);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute successLogin={successLogin} />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login successLogin={successLogin} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
