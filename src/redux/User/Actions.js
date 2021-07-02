import {actionTypes} from "./ActionTypes";

export const setCurrentUser = (user) => ({
  type: actionTypes.setCurrentUser,
  payload: user
});