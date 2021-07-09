import {actionTypes} from "./ActionTypes";

export const setCurrentUser = (user) => ({
  type: actionTypes.setCurrentUser,
  payload: user
});
export const emailSignInStart = (emailAndPassword) => ({
  type: actionTypes.emailSignInStart,
  payload: emailAndPassword
});
export const signInSuccess = (user) => ({
  type: actionTypes.signInSuccess,
  payload: user
});
export const signInFailure = (errorMessage) => ({
  type: actionTypes.signInError,
  payload: errorMessage
});
export const GoogleSignInStart = () => ({
  type: actionTypes.GoogleSignInStart
});
export const checkUserSession = () => ({
  type: actionTypes.checkUserSession
});
export const signOutStart = () => ({
  type: actionTypes.signOutStart
});
export const signOutSuccess = () => ({
  type: actionTypes.signOutSuccess
});
export const signOutFailure = (errorMessage) => ({
  type: actionTypes.signOutFailure,
  payload: errorMessage
});
