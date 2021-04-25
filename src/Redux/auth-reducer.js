const SET_AUTH_INFO = 'SET_AUTH_INFO'
const SET_DATA = 'SET_DATA'


let srartState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    dataPerson: null,
    havePersonData: false,
}

const authReducer = (state = srartState, action) => {

    switch (action.type) {
        case SET_AUTH_INFO :
            return {
                ...state,
                ...action.AuthInfo,
                isAuth: true,
            }
        case SET_DATA :
            return {

                ...state,
                dataPerson: action.data,
                havePersonData: true,
            }

        default:
            return state
    }


};

export const setAuthInfo = (id, login, email) => ({type: SET_AUTH_INFO, AuthInfo: {id, login, email}})
export const setData = (data) => ({type: SET_DATA, data})

export default authReducer;
