import ActionTypes from "./ActionTypes";
import {addItemToCart, clearItem, removeItem} from "./utils";

const INITIAL_STATE = {
  hidden: true,
  items: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ActionTypes.ToggleCartDropdown) {
    return {...state, hidden: !state.hidden}
  } else if (action.type === ActionTypes.AddItem) {
    return {...state, items: addItemToCart(state.items, action.payload)};
  } else if (action.type === ActionTypes.RemoveItem) {
    return {...state, items: removeItem(state.items, action.payload)}
  } else if (action.type === ActionTypes.ClearItem) {
    return {...state, items: clearItem(state.items, action.payload)}
  } else {
    return state;
  }
};
