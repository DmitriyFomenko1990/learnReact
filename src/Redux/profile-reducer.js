import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_DATA = 'SET_DATA';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

let srartState = {
    posts: [
        {id: 'Igor', message: 'post1', likeCount: 2},
        {id: 'Igor', message: 'post2', likeCount: 5},
        {id: 'Igor', message: 'post3', likeCount: 1},
        {id: 'Igor', message: 'post4', likeCount: 0},
    ],
    dataPerson: null,
    status: 'Статус',
};
const profileReducer = (state = srartState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {id: 1, message: action.postText, likeCount: 0}
            return {...state, posts: [...state.posts, newPost]}
        case SET_DATA :
            return {...state, dataPerson: action.data}
        case SET_STATUS :
            return {...state, status: action.status}
        case SAVE_PHOTO :
            return {...state, dataPerson: {...state.dataPerson, photos: action.photoFile}}
        default:
            return state
    }
};
export const addPost = (postText) => ({type: ADD_POST, postText});
export const setData = (data) => ({type: SET_DATA, data});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhoto = (photoFile) => ({type: SAVE_PHOTO, photoFile});

export const getProfileData = (userID) => async (dispatch) => {
    let data = await profileAPI.getUserData(userID);
    dispatch(setData(data));
};
export const getStatus = (userID) => async (dispatch) => {
    let status = await profileAPI.getStatus(userID);
    dispatch(setStatus(status.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.pushStatus(status);
    if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export const updatePhoto = (photoFile) => async (dispatch) => {
    let response = await profileAPI.pushPhoto(photoFile);
    if (response.data.resultCode === 0) dispatch(savePhoto(response.data.data.photos));
};


export default profileReducer;