import * as Data from "./types";

interface Author {
  name: string;
  id: string;
}
export const authorsInitialState: Author[] = [];

// Use the initialState as a default value
export const AuthorReducer = (state = authorsInitialState, action) => {
  switch (action.type) {
    case Data.ADD_AUTHOR:
      return [...state, action.payload];

    case Data.SAVE_EXISTING_AUTHOR:
      return action.payload;

    case Data.RESET_AUTHOR:
      return authorsInitialState;

    default:
      return state;
  }
};
