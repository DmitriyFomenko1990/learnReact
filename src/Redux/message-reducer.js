const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let srartState = {
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

}

const messageReducer = (state = srartState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let inputText = state.newMessageText
            let newMessageData = {message: inputText}
            state.DialogsData.push(newMessageData)
            state.newMessageText = ''
            return state
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
        default:
            return state
    }
};

export const addMesageActivCreate = () => ({type: ADD_MESSAGE})

export const changeNewMessaageTextActivCreate = (text) =>
    ({type: CHANGE_NEW_MESSAGE_TEXT, newText: text})

export default messageReducer;
