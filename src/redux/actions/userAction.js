import actionTypes from "../actionsTypes.js";


const setUsers = (users) =>({
    type:actionTypes.user.SET_USERS,payload:users
}) ;

const getUsers = () =>({
    type:actionTypes.user.GET_USERS
}) ;

const userActions = {
    setUsers,
    getUsers,
  };
  
  export default userActions;
