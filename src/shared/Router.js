import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Profile from "pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
