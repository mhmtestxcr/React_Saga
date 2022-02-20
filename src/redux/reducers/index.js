import countReducer from "./countReducer";
import { combineReducers } from "redux"
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    count:countReducer,
    todos:todoReducer,
    users:userReducer,
})

export default reducers;