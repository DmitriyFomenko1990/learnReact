import {usersAPI} from "../api/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const UPDATE_PAGE = 'UPDATE_PAGE';
const IS_RECEIVED = 'IS_RECEIVED';

let srartState = {
    users: [],
    numberUsersPerPage: 4,
    usersPageNumber: 1,
    totalUsers: 0,
    isReceivedStatus: false,
};

const usersReducer = (state = srartState, action) => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, isFallow: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, isFallow: false}
                    }
                    return u
                })
            }
        case 'SET_USERS' :
            return {...state, users: [...action.users]}
        case 'SET_TOTAL_COUNT' :
            return {...state, totalUsers: action.totalCount}
        case 'UPDATE_PAGE' :
            return {...state, usersPageNumber: action.page}
        case 'IS_RECEIVED' :
            return {...state, isReceivedStatus: action.isReceived}
        default:
            return state
    }
};
export const follow = (id) => ({type: FOLLOW, userid: id});
export const unfollow = (id) => ({type: UNFOLLOW, userid: id});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalUsers = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const updatePage = (page) => ({type: UPDATE_PAGE, page});
export const isReceived = (isReceived) => ({type: IS_RECEIVED, isReceived});

export const requestUsers = (usersPageNumber, numberUsersPerPage) => async (dispatch) => {
    dispatch(isReceived(true));
    let data = await usersAPI.getUsers(usersPageNumber, numberUsersPerPage);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
    dispatch(isReceived(false));
};
export default usersReducer;
