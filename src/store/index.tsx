import { composeWithDevTools } from "redux-devtools-extension"; // import DevTools
import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { coursesInitialState, CourseType } from "./courses/reducer";
import { authorsInitialState } from "./author/reducer";
import { userInitialState } from "./user/reducer";
import { UserType } from "./user/types";
import { AuthorTypes } from "./author/types";

export type State = {
  courses: CourseType;
  user: UserType;
  author: AuthorTypes;
};

const appInitialState = {
  courses: coursesInitialState,
  author: authorsInitialState,
  user: userInitialState,
};
const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;
