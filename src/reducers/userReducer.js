import { ADD_USER } from "../actions/usersActionsTypes";
 let usersCounter = 0;
 const initialState = {
    users: []
};
const usersReducer = (state = initialState, action) => {
    if(action.type === ADD_USER) {
        let data = { id: ++usersCounter, ...action.user };
        return {
            users: [...state.users, data]
        };
    }
    return state;
};
export default usersReducer;