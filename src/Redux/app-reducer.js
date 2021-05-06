import {getUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let srartState = {initialized: false};

const appReducer = (state = srartState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {...state, initialized: true}
        default:
            return state
    }
};
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
     await dispatch(getUserData())
        dispatch(initializedSuccess())
};
export default appReducer;
