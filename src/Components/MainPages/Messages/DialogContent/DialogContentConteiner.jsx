import React from 'react';
import {addMesageActivCreate, changeNewMessaageTextActivCreate} from "../../../../Redux/message-reducer";
import DialogContent from "./DialogContent";
import {connect} from "react-redux";


const  mapStateToProps = (state) =>{
    return {
        newMessageText: state.messagePage.newMessageText,
        DialogsDataProps: state.messagePage.DialogsData,
        dialogsObjProps: state.messagePage.dialogsObject,
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(addMesageActivCreate());
        },
        MessageChange: (text) => {
            let action = changeNewMessaageTextActivCreate(text);
            dispatch(action);
        },

    }
}

const DialogContentConteiner = connect(mapStateToProps, mapDispatchToProps)(DialogContent);


export default DialogContentConteiner