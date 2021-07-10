import {actionTypes} from "./ActionTypes";

const INITIAL_STATE = {
  currUser: null,
  errorMassage: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.setCurrentUser:
      return {
        ...state,
        currUser: action.payload
      };
    case actionTypes.signInSuccess:
      return {
        ...state,
        errorMessage: null,
        currUser: action.payload
      }
    case actionTypes.signInError:
      return {
        ...state,
        errorMessage: action.payload
      }
    case actionTypes.signOutSuccess:
      return {
        ...state,
        currUser: null,
        errorMessage: null
      }
    case actionTypes.signOutFailure:
      return {
        ...state,
        errorMessage: action.payload
      }
    case actionTypes.signUpSuccess:
      return {
        ...state,
        currUser: action.payload,
        errorMessage: null
      }
    case actionTypes.signUpFailure:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;