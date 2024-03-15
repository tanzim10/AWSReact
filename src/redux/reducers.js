import { combineReducers } from "redux";
import employee from "./employee/reducer";
import auth from "./auth/reducer";

const reducers = combineReducers({ employee, auth });

export default reducers;
