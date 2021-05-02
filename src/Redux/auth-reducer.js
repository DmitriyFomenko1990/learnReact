import {loginAPI, profileAPI} from "../api/api";

const SET_AUTH_INFO = 'SET_AUTH_INFO'

let srartState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = srartState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO :
            return {
                ...state,
                ...action.AuthInfo,
            }
        default:
            return state
    }
};

export const setAuthInfo = (id, login, email, isAuth) => (
    {type: SET_AUTH_INFO, AuthInfo: {id, login, email, isAuth}});

export const getUserData = () => (dispatch) => {
        profileAPI.getAuthInfo()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthInfo(id, login, email,true))
                }
            });
    };

export const loginThunk = (formData) =>  (dispatch) => {
        loginAPI.login(formData).then( data =>{
                if (data.data.resultCode === 0) {
                    dispatch(getUserData());
                }
            });
    };

export const logoutThunk = () =>  (dispatch) => {
    loginAPI.logout().then( data =>{
        if (data.data.resultCode === 0) {
            dispatch(setAuthInfo( null,  null,  null,  false));
        }
    });
};

export default authReducer;
