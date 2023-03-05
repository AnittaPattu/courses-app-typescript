import * as Data from "./types";

export type CourseType = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Array<string>;
};

export const coursesInitialState: CourseType[] = [];

// Use the initialState as a default value
export const coursesReducer = (state = coursesInitialState, action) => {
  switch (action.type) {
    case Data.ADD_COURSE:
      return [...state, ...action.payload];

    case Data.DELETE_COURSE:
      return [state, action.payload];

    case Data.UPDATE_COURSES:
      return [...state, action.payload];

    case Data.SAVE_COURSE:
      return action.payload;

    case Data.RESET_Courses:
      return coursesInitialState;

    default:
      return state;
  }
};
