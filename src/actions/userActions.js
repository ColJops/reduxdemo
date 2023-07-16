import { ADD_USER } from "./usersActionsTypes";
export const addUser = user => {
    return {
        type: ADD_USER,
        user
    };
};