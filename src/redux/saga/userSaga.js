import axios from "axios";
import { call, put } from "redux-saga/effects";
import Actions from "../actions";

async function fetchUsers() {
  try {

    const { data } = await axios.get(

      "https://jsonplaceholder.typicode.com/users"

    );
    return data;

  } catch (err) {

    console.log(err);

  }
}
 
export function* handleGetUsers(){

    const users  =  yield call(fetchUsers);

    yield put(Actions.userActions.setUsers(users));
}
