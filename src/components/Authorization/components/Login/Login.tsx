import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonTypes } from "src/common/Button/button";
import Input, { InputType } from "src/common/Input/input";
import { getData, postData } from "src/store/service";
import { useDispatch } from "react-redux";
import { addUserAction } from "src/store/user/action";
import { addAuthorAction, saveAuthorAction } from "src/store/author/action";
import { addCourseAction } from "src/store/courses/action";

export const Login = () => {
  const navigate = useNavigate();
  const name = "";
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const emailData = (data) => {
    setemail(data);
  };
  const passwordData = (data) => {
    setPassword(data);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const user = { name, email, password };
    postData("/login", JSON.stringify(user)).then((loginData) => {
      if (loginData.successful) {
        localStorage.setItem("token", JSON.stringify(loginData.result));
        const login = {
          user: loginData.user.name,
          isAuth: loginData.successful,
          email: loginData.user.email,
          token: loginData.result,
        };
        console.log(login);
        dispatch(addUserAction(login));
        getAllCourses();
        getAllAUthors();
        navigate("/courses", { replace: true });
      } else {
        const error = loginData.result;
        alert(error);
      }
    });
  };

  const getAllCourses = () => {
    getData("/courses/all").then((data) => {
      if (data.successful) {
        dispatch(addCourseAction(data.result));
      } else {
        alert("something went wrong....");
      }
    });
  };

  const getAllAUthors = () => {
    getData("/authors/all").then((data) => {
      if (data.successful) {
        dispatch(saveAuthorAction(data.result));
      } else {
        alert("something went wrong....");
      }
    });
  };

  return (
    <div>
      <div className="login-form-content">
        <form type="submit" onSubmit={formSubmit}>
          <Input
            labelText="Email"
            inputType={InputType.EMAIL}
            placeholder="Enter Email id"
            id="email"
            value={email}
            labelClass="registration-label-text"
            change={emailData}
          />
          <Input
            labelText="Password"
            inputType={InputType.PASSWORD}
            placeholder=" Enter password"
            id="password"
            value={password}
            labelClass="registration-label-text"
            change={passwordData}
          />
          <Button
            type={ButtonTypes.Submit}
            buttonText="Login"
            class="button auth-btn"
          />
        </form>
      </div>
      <p className="align-center">
        If you not have an account you can{" "}
        <Link to={`registration`}>Registration</Link>
      </p>
    </div>
  );
};
