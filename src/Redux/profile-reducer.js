import {profileAPI} from "../api/api";


const ADD_POST = 'ADD_POST'
const SET_DATA = 'SET_DATA'
const SET_STATUS = 'SET_STATUS'


let srartState = {
    posts: [
        {id: 'Igor', message: 'post1', likeCount: 2},
        {id: 'Igor', message: 'post2', likeCount: 5},
        {id: 'Igor', message: 'post3', likeCount: 1},
        {id: 'Igor', message: 'post4', likeCount: 0},
    ],
    dataPerson: null,
    status: 'Статус',

}

const profileReducer = (state = srartState, action) => {

    switch (action.type) {
        case ADD_POST :

            let newPost = {
                id: 1,
                message: action.Textpost,
                likeCount: 0
            }
            return {
                ...state,
                 posts: [...state.posts, newPost],

            }
        case SET_DATA :
            return {

                ...state,
                dataPerson: action.data,
            }
        case SET_STATUS :

            return {

                ...state,
                status: action.status,
            }
        default:
            return state
    }


};

export const addPost = (Textpost) => ({type: ADD_POST, Textpost})
export const setData = (data) => ({type: SET_DATA, data})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfileData = (userID) => {
    return (dispatch) => {
        profileAPI.getUserData(userID)
            .then(data => {

                    dispatch(setData(data))
                }
            )
    }
}
export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID)
            .then(status => {

                dispatch(setStatus(status.data))
            })
    }
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.pushStatus(status)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
}


export default profileReducer;
