import { LOGIN_USER } from "./actions/types";
const initialState = {};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};
