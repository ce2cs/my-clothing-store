import {combineReducers} from "redux";

import userReducer from "./User/Reducer";
import {cartReducer} from "./Cart/Reducer"

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
