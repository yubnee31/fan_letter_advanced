import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "redux/modules/authSlice";
import styled from "styled-components";

function Layout() {
  const dispatch = useDispatch();
  const logoutBtnHandler = () => {
    return dispatch(logout());
  };

  return (
    <>
      <StNav>
        <Link to="/">HOME</Link>
        <div>
          <Link to="/profile">MY PROFILE</Link>
          <span onClick={logoutBtnHandler}>LOGOUT</span>
        </div>
      </StNav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

const StNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7a7bb;
  width: 100%;
  color: black;
  height: 45px;
  user-select: none;

  a {
    text-decoration: none;
    color: inherit;
    margin-left: 20px;
  }

  div a {
    margin-right: 15px;
  }

  span {
    cursor: pointer;
    margin-right: 20px;
  }
`;
