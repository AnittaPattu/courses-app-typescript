import Logo from "./components/Logo/logo";
import Button from "../../common/Button/button";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addUserAction, deleteUserAction } from "src/store/user/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { State } from "src/store";
import { resetCourseAction } from "src/store/courses/action";
import { resetAuthorAction } from "src/store/author/action";

interface User {
  isAuth: boolean;
  name: string;
  email: string;
  token: string;
}

function Header() {
  const HEADER_BUTTON_TEXT = "Logout";
  // const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector<State>((state) => state.user);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  function logout() {
    localStorage.removeItem("token");
    const logout = {
      user: "",
      isAuth: false,
      email: "",
      token: "",
    };
    dispatch(deleteUserAction(logout));
    dispatch(resetCourseAction());
    dispatch(resetAuthorAction());
    navigate("/");
  }

  return (
    <div className="header-container">
      <Logo />
      {!["/", "/login", "registration"].includes(pathname) && (
        <div className="float-right">
          <span className="px-3 font-weight-bold toUpper">{user?.name}</span>
          <Button
            buttonText={HEADER_BUTTON_TEXT}
            class="button"
            handleClick={logout}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
