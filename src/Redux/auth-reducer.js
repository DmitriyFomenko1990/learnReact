import {profileAPI} from "../API/API";

const SET_AUTH_INFO = 'SET_AUTH_INFO'




let srartState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = srartState, action) => {

    switch (action.type) {
        case SET_AUTH_INFO :

            return {
                ...state,
                ...action.AuthInfo,
                isAuth: true,
            }
        default:
            return state
    }


};

export const setAuthInfo = (id, login, email) => ({type: SET_AUTH_INFO, AuthInfo: {id, login, email}})



export const getUsersLogin = () => {
    return (dispatch) => {
        profileAPI.getAuthInfo()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthInfo(id, login, email))
                }
            });
    }}



export default authReducer;
