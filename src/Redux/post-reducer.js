const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let srartState = {
    PostsObj: [
        {id: 'Igor', message: 'post1', likeCount: 2},
        {id: 'Igor', message: 'post2', likeCount: 5},
        {id: 'Igor', message: 'post3', likeCount: 1},
        {id: 'Igor', message: 'post4', likeCount: 0},
    ],
    newTextArea: '',
}

const postReducer = (state = srartState, action) => {

    switch (action.type) {
        case 'ADD-POST' :
            let inputText = state.newTextArea
            let newMessageData = {id: 1, message: inputText, likeCount: 0}
            state.PostsObj.unshift(newMessageData);
            state.newTextArea = ''
            return state
        case 'CHANGE-NEW-POST-TEXT' :
            state.newTextArea = action.newText
            return state
        default:
            return state
    }


};

export const addPostActivCreate = () => ({type: ADD_POST})
export const changeNewPostTextActivCreate = (text) =>
    ({type: CHANGE_NEW_POST_TEXT, newText: text})

export default postReducer;
