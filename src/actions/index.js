import { login } from "../api";
import { LOGIN_USER } from "./types";

export const loginUser = username => {
  return dispatch => {
    login(username).then(res => {
      dispatch({ type: LOGIN_USER, payload: res });
    });
  };
};
