import ActionTypes from "./ActionTypes";

export const ToggleCartDropdown = () => ({
  type: ActionTypes.ToggleCartDropdown
});

export const addItem = (item) => ({
  type: ActionTypes.AddItem,
  payload: item
})

export const removeItem = item => ({
  type: ActionTypes.RemoveItem,
  payload: item
})

export const clearItem = item => ({
  type: ActionTypes.ClearItem,
  payload: item
})


