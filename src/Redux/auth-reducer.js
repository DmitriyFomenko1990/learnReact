import {loginAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_INFO = 'SET_AUTH_INFO';

let srartState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};
const authReducer = (state = srartState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO :
            return {...state, ...action.AuthInfo}
        default:
            return state
    }
};
export const setAuthInfo = (id, login, email, isAuth) => (
    {type: SET_AUTH_INFO, AuthInfo: {id, login, email, isAuth}});

export const getUserData = () => async (dispatch) => {
    let response = await profileAPI.getAuthInfo()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthInfo(id, login, email, true))
    }
};
export const loginThunk = (formData) => async (dispatch) => {
    let response = await loginAPI.login(formData)
    if (response.data.resultCode === 0) {
        dispatch(getUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};
export const logoutThunk = () => async (dispatch) => {
    let response = await loginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthInfo(null, null, null, false));
    }

};
export default authReducer;
