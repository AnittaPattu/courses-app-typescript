import * as Data from "./types";

export const addUserAction = (payload) => ({
  type: Data.ADD_USER,
  payload,
});
export const deleteUserAction = (payload) => ({
  type: Data.DELETE_USER,
  payload,
});
