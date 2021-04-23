const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SETUSERS = 'SETUSERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const UPDATE_PAGE = 'UPDATE_PAGE'
const IS_RECEIVED = 'IS_RECEIVED'


let srartState = {
    users: [/*
        {
            id: 1,
            avatarImg: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png',
            userName: 'Dmiriy Fomenko',
            isFallow: true,
            presentPost: 'manager',
            userTelNumber: "+7 988 777 77 77"
        },
        {
            id: 2,
            avatarImg: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png',
            userName: 'Alina Mysina',
            isFallow: false,
            presentPost: 'louer',
            userTelNumber: "+7 918"
        },
        {
            id: 3,
            avatarImg: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png',
            userName: 'Oksana Soldatova',
            isFallow: true,
            presentPost: 'director',
            userTelNumber: "+7 918"
        },
        {
            id: 4,
            avatarImg: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png',
            userName: 'Andrey Dorogkin',
            isFallow: false,
            presentPost: 'manager',
            userTelNumber: "+7 918"
        },
   */],
    usersPageCount: 4,
    usersPageNumber: 1,
    totalUsers: 0,
    isReceivedStatus: false,

}
window.state = srartState
const usersReducer = (state = srartState, action) => {

    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userid) {
                        return {...u, isFallow: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userid) {
                        return {...u, isFallow: false}
                    }
                    return u
                })
            }
        case 'SETUSERS' :
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

export const follow = (id) => ({type: FOLLOW, userid: id})
export const unfollow = (id) => ({type: UNFOLLOW, userid: id})
export const setUsers = (users) => ({type: SETUSERS, users: users})
export const setTotalUsers= (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const updatePage = (page) => ({type: UPDATE_PAGE, page})
export const isReceived = (isReceived) => ({type: IS_RECEIVED, isReceived})


export default usersReducer;
