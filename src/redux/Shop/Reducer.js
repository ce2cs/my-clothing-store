import ActionTypes from "./ActionTypes";
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMassage: null
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.fetchCollectionStart: {
      return {
        ...state,
        isFetching: true
      }
    }
    case ActionTypes.fetchCollectionSuccess: {
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    }
    case ActionTypes.fetchCollectionFailure: {
      return {
        ...state,
        isFetching: false,
        errorMassage: action.payload
      }
    }
    case ActionTypes.updateCollections: {
      return {...state, collections: action.payload}
    }
    default:
      return state;
  }
}

export default shopReducer;