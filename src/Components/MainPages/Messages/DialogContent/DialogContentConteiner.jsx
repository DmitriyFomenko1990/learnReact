import React from 'react';
import {addMesageActivCreate, changeNewMessaageTextActivCreate} from "../../../../Redux/message-reducer";
import DialogContent from "./DialogContent";

const DialogContentConteiner = (props) => {

    let newMessageText = props.store.getState().messagePage.newMessageText
    let DialogsDataProps = props.store.getState().messagePage.DialogsData

    function sendMessage() {
        props.store.dispatch(addMesageActivCreate())
    }

    let MessageChange = (text) => {
        props.store.dispatch(changeNewMessaageTextActivCreate(text))
    }

    return (
        <DialogContent  sendMessage={sendMessage}
                        MessageChange={MessageChange}
                        newMessageText={newMessageText}
                        DialogsDataProps={DialogsDataProps}/>
    )
}

export default DialogContentConteiner