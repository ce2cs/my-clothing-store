import ActionTypes from "./ActionTypes";
import {addItemToCart, clearItem, removeItem} from "./utils";

const INITIAL_STATE = {
  hidden: true,
  items: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ToggleCartDropdown:
      return {...state, hidden: !state.hidden}
    case ActionTypes.AddItem:
      return {...state, items: addItemToCart(state.items, action.payload)};
    case ActionTypes.RemoveItem:
      return {...state, items: removeItem(state.items, action.payload)}
    case ActionTypes.ClearItem:
      return {...state, items: clearItem(state.items, action.payload)}
    case ActionTypes.ClearCart:
      return {...state, items: []}
    default:
      return state;
  }
};

