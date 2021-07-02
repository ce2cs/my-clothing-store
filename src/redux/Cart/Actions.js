import ActionTypes from "./ActionTypes";

export const ToggleCartDropdown = () => ({
  type: ActionTypes.ToggleCartDropdown
});

export const addItem = (item) => ({
  type: ActionTypes.AddItem,
  payload: item
})
