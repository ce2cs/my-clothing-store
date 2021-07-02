import {combineReducers} from "redux";

import userReducer from "./User/Reducer";

export default combineReducers({
  user: userReducer
})
