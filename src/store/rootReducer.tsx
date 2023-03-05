import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthorReducer } from "./author/reducer";

import { coursesReducer } from "./courses/reducer"; // reducer that we already have
import { userReducer } from "./user/reducer";

// const reducerData = combineReducers({
//   courses: coursesReducer,
//   user: userReducer,
//   author: AuthorReducer,
// });

// export const rootReducer = configureStore({ reducer: reducerData });

const rootReducer = combineReducers({
  courses: coursesReducer,
  user: userReducer,
  author: AuthorReducer,
});

export default rootReducer;
