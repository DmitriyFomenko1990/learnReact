import style from './DialogContent.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";

const DialogContent = (props) => {
    let newMessage = React.createRef();

    function onSendMessage() {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.MessageChange(text);
    }
    return (
        <div className={style.dialogsPage}>
            <div>
                {DialogsList(props.dialogsObjProps)}
            </div>
            <div className={style.messagesSpace}>
                {Dialogs(props.DialogsDataProps)}
            </div>
            <div className={style.inputBox}>
                <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText}/>
                <button onClick={onSendMessage}>отпр</button>
            </div>
        </div>
    )
}
const UserItem = (props) => {
    return <div className={style.list}><NavLink to={'/messeges/' + props.id}>{props.name}</NavLink></div>
};

function DialogsList(Arrey) {
    return Arrey.map((user) => <UserItem id={user.id} name={user.name}/>)
}

const DialogMessage = (props) => <div>{props.message} </div>;

function Dialogs(Arrey) {
    return Arrey.map((mess) => <DialogMessage message={mess.message}/> )
}
export default DialogContent;