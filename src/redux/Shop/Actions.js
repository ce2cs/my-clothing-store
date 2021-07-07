import ActionTypes from "./ActionTypes";

export const updateCollections = (collections) => ({
  type: ActionTypes.updateCollections,
  payload: collections
});