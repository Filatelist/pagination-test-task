const getUsers = users => {
  return {
    type: "USERS_LOADED",
    payload: users
  };
};
const getCurrentUsers = (users) => {
    return {
        type: "GET_CURRENT_USERS",
        payload: users
    }
};

export { getCurrentUsers, getUsers };
