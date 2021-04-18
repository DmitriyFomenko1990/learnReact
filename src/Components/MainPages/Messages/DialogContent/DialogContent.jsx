import style from './DialogContent.module.css'
import React from 'react';
import {addMesageActivCreate, changeNewMessaageTextActivCreate} from "../../../../Redux/message-reducer";

const DialogContent = (props) => {

    let newMessage = React.createRef();

    function odSendMessage() {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.MessageChange(text);
    }

    return (
        <div className={style.dialogsPage}>
            <div className={style.messagesSpace}>
                {Dialogs(props.DialogsDataProps)}
            </div>
            <div className={style.inputBox}>
                <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText}/>
                <button onClick={odSendMessage}>отпр</button>
            </div>
        </div>
    )
}

const DialogMessage = (props) => {
    return <div>{props.message} </div>
}


function Dialogs(Arrey) {
    return Arrey.map((mess) => {
        return <DialogMessage message={mess.message}/>
    })
}

export default DialogContent