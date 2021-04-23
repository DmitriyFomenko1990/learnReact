import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";


const mapStateToProps = (state) => {
    return {
        postsObj: state.profilePage.PostsObj
    }
}


const  InputFormConteiner = connect(mapStateToProps)(Profile);

export default InputFormConteiner;
