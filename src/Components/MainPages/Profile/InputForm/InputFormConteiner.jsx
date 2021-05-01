import React from 'react';
import {addPost} from "../../../../Redux/profile-reducer";
import InputForm from "./InputForm";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addPost: (Textpost) => {
            dispatch(addPost(Textpost));
        },
    }
}

const  InputFormConteiner = connect(mapStateToProps, mapDispatchToProps)(InputForm);

export default InputFormConteiner;