const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_DATA = 'SET_DATA'


let srartState = {
    PostsObj: [
        {id: 'Igor', message: 'post1', likeCount: 2},
        {id: 'Igor', message: 'post2', likeCount: 5},
        {id: 'Igor', message: 'post3', likeCount: 1},
        {id: 'Igor', message: 'post4', likeCount: 0},
    ],
    newTextArea: 'dfve',
    dataPerson: null,
}

const profileReducer = (state = srartState, action) => {

    switch (action.type) {

        case ADD_POST :
            let inputText = state.newTextArea
            let newMessageData = {id: 1, message: inputText, likeCount: 0}
            return {
                ...state,
                PostsObj: [...state.PostsObj, newMessageData],
                newTextArea: '',
            }
        case CHANGE_NEW_POST_TEXT :
            return {
                ...state,
                newTextArea: action.newText,
            }
            case SET_DATA :
            return {

                ...state,
                dataPerson: action.data,
            }
        default:
            return state
    }


};

export const addPostActivCreate = () => ({type: ADD_POST})
export const changeNewPostTextActivCreate = (text) => ({type: CHANGE_NEW_POST_TEXT, text})
export const setData = (data) => ({type: SET_DATA, data})

export default profileReducer;
