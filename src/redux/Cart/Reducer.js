import ActionTypes from "./ActionTypes";
import {addItemToCart} from "./utils";

const INITIAL_STATE = {
  hidden: true,
  items: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ActionTypes.ToggleCartDropdown) {
    return {...state, hidden: !state.hidden}
  } else if (action.type === ActionTypes.AddItem) {
    return {...state, items: addItemToCart(state.items, action.payload)};
  } else {
    return state;
  }
};
