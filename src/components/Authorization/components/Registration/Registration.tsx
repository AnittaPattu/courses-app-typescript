import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../common/Button/button";
import Input from "../../../../common/Input/input";
import { postData } from "src/store/service";

export const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const nameData = (data) => {
    setName(data);
  };
  const emailData = (data) => {
    setemail(data);
  };
  const passwordData = (data) => {
    setPassword(data);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const user = { name, email, password };
    postData("/register", JSON.stringify(user)).then((registrationData) => {
      if (registrationData.successful) {
        navigate("/login", { replace: true });
      } else {
        const error = registrationData.errors;
        alert(error);
      }
    });
  };

  return (
    <div>
      <div className="registration-form-content">
        <form type="submit" onSubmit={formSubmit}>
          <Input
            labelText="Name"
            inputType="text"
            placeholder="Enter name"
            labelClass="registration-label-text"
            value={name}
            id="name"
            change={nameData}
          />
          <Input
            labelText="Email"
            inputType="email"
            placeholder="Enter Email id"
            id="email"
            value={email}
            labelClass="registration-label-text"
            change={emailData}
          />
          <Input
            labelText="Password"
            inputType="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            labelClass="registration-label-text"
            change={passwordData}
          />
          <Button
            type="submit"
            buttonText="Registration"
            class="button auth-btn"
          />
        </form>
      </div>
      <p className="align-center">
        If you have an account you can <Link to={`/login`}>Login</Link>
      </p>
    </div>
  );
};
