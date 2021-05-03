import postReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        profilePage: {
            PostsObj: [
                {id: 'Igor', message: 'post1', likeCount: 2},
                {id: 'Igor', message: 'post2', likeCount: 5},
                {id: 'Igor', message: 'post3', likeCount: 1},
                {id: 'Igor', message: 'post4', likeCount: 0},
            ],
            newTextArea: '',
        },
        messagePage: {
            dialogsObject: [
                {id: 1, name: 'Дима'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Саша'},
                {id: 4, name: 'Вася'},
                {id: 5, name: 'Света'},
                {id: 6, name: 'Оля'},
            ],
            DialogsData: [
                {message: 'It is React Applicatoins'},
                {message: 'hi'},
                {message: 'bv'},
                {message: 'yo'},
            ],
            newMessageText: '',
        },
    },
    _callObserver() {
        console.log('1')
    },
    subscribe(observer) {
        this._callObserver = observer;
    },
    getState() {
        return this._state
    },
    _addPost() {
        let inputText = this._state.profilePage.newTextArea;
        let newMessageData = {id: 1, message: inputText, likeCount: 0};
        this._state.profilePage.PostsObj.unshift(newMessageData);
        this._state.profilePage.newTextArea = '';
        this._callObserver(this._state);
    },
    _changeNewPostText(newText) {

        this._state.profilePage.newTextArea = newText;
        this._callObserver(this._state);
    },
    _addMessage() {
        let inputText = this._state.messagePage.newMessageText;
        let newMessageData = {message: inputText};
        this._state.messagePage.DialogsData.push(newMessageData);
        this._state.messagePage.newMessageText = '';
        this._callObserver(this._state);

    },
    _changeNewMessageText(newText) {

        this._state.messagePage.newMessageText = newText;
        this._callObserver(this._state);
    },

    dispatch(action) {
        this._state.profilePage = postReducer(action, this._state.profilePage)
        this._state.messagePage = messageReducer(action, this._state.messagePage)
        this._callObserver(this._state);
    }
};
export default store;