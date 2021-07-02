const INITIAL_STATE = {
  currUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'user/setCurrentUser': return {
      ...state,
      currUser: action.payload
    };
    default: return state;
  }
}

export default userReducer;