import ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
  hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ActionTypes.ToggleCartDropdown) {
    return {...state, hidden: !state.hidden}
  } else {
    return state;
  }
};
