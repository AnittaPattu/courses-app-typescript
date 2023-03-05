import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/header";
import "./App.css";

export const App: React.FC = () => {
  const navigate = useNavigate();
  const getItem = localStorage.getItem("token");
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (
      getItem &&
      getItem !== undefined &&
      JSON.parse(getItem) &&
      JSON.parse(getItem) !== undefined
    ) {
      navigate("/courses");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
