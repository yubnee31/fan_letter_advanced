import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Profile from "pages/Profile";
import ProtectedRoute from "components/ProtectedRoute";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const Router = () => {
  const successLogin = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute successLogin={successLogin} />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login successLogin={successLogin} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
