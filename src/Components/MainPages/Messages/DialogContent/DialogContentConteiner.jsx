import React from 'react';
import {addMesageActivCreate, changeNewMessaageTextActivCreate} from "../../../../Redux/message-reducer";
import DialogContent from "./DialogContent";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";
import {compose} from "redux";


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
export default compose(
 connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogContent)

