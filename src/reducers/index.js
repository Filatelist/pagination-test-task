const initialState = {
  users: [],
  currentUsers:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOADED":
      return {
        users: action.payload,
        currentUsers: action.payload.slice(0,5)
      };
    case "GET_CURRENT_USERS":
      return {
        ...state,
        currentUsers: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
