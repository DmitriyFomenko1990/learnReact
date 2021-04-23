import {combineReducers, createStore} from "redux";
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import {useReducer} from "react";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: postReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

window.store = store

export default store