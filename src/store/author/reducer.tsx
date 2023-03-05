import * as Data from "./types";

export const authorsInitialState = [];

// Use the initialState as a default value
export const AuthorReducer = (state = authorsInitialState, action) => {
  switch (action.type) {
    case Data.ADD_AUTHOR:
      return [...state, action.payload];

    case Data.SAVE_EXISTING_AUTHOR:
      return action.payload;

    default:
      return state;
  }
};
