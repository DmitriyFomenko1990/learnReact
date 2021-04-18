import {combineReducers, createStore} from "redux";
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    profilePage: postReducer,
    messagePage: messageReducer,
})

let store = createStore(reducers);


export default store