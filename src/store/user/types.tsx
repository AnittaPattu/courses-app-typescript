/* eslint-disable prettier/prettier */
export const ADD_USER = "SAVE_USER";
export const DELETE_USER = "DELETE_USER";

export type UserType = {
    isAuth: boolean;
    name: string;
    email: string;
    token: string;
};
