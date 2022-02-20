import actionTypes from "../actionsTypes.js/index.js";

const initalState = []

const userReducer = (state = initalState, action) => {
  switch (action.type) {
      case actionTypes.user.SET_USERS:
        return action.payload;

    default:
      return state;
  }
};

export default userReducer;