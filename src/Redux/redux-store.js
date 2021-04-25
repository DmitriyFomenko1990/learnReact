import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import {useReducer} from "react";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers);

window.store = store

export default store