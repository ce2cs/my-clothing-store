import {combineReducers} from "redux";

import userReducer from "./User/Reducer";
import {cartReducer} from "./Cart/Reducer"
import directoryReducer from "./Directory/Reducer";
import shopReducer from "./Shop/Reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
