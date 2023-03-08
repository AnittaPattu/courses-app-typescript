import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CreateCourse } from "./components/CreateCourse/createCourse";
import { Login } from "./components/Authorization/components/Login/Login";
import { Registration } from "./components/Authorization/components/Registration/Registration";
import { CourseInfo } from "./components/Courses/components/Course-Info/Course-Info";
import { Courses } from "./components/Courses/courses";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="/courses">
              <Route index element={<Courses />} />
              <Route path=":id" element={<CourseInfo />} />
              <Route path="add" element={<CreateCourse />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
