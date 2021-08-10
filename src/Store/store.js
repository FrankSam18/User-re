import {createStore} from "redux";
import usersReducers from "../Reducers/usersReducers";

const Store = createStore(usersReducers)

export default Store;

