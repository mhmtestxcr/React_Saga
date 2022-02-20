import { takeLatest } from "redux-saga/effects";
import actionTypes from "../actionsTypes.js";
import { handleGetUsers } from "./userSaga.js";


export function* rootSaga(){

    yield takeLatest(actionTypes.user.GET_USERS,handleGetUsers);
}