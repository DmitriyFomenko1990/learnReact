import React from 'react';
import {addPostActivCreate, changeNewPostTextActivCreate} from "../../../../Redux/profile-reducer";
import InputForm from "./InputForm";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newTextArea: state.profilePage.newTextArea
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActivCreate());
        },
        postChange: (text) => {
            let action = changeNewPostTextActivCreate(text);
            dispatch(action);
        },
    }
}

const  InputFormConteiner = connect(mapStateToProps, mapDispatchToProps)(InputForm);

export default InputFormConteiner;