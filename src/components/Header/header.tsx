import Logo from "./components/Logo/logo";
import Button from "../../common/Button/button";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addUserAction } from "src/store/user/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { State } from "src/store";

function Header() {
  const HEADER_BUTTON_TEXT = "Logout";
  const location = useLocation();
  const navigate = useNavigate();
  const name = useSelector<State>((state) => state.user.name);
  const dispatch = useDispatch();
  const [showName, isName] = useState(false);

  if (!["/", "login", "registration"].includes(location.pathname)) {
    isName(true);
  }

  function logout(event) {
    event.prevenDefault();
    localStorage.removeItem("token");
    const logout = {
      user: "",
      isAuth: false,
      email: "",
      token: "",
    };
    dispatch(addUserAction(logout));
    navigate("/");
  }

  return (
    <div className="header-container">
      <Logo />
      {showName && (
        <div className="float-right">
          <span className="px-3 font-weight-bold toUpper">{name}</span>
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
