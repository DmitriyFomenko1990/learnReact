import React from 'react';
import {addPostActivCreate, changeNewPostTextActivCreate} from "../../../../Redux/post-reducer";
import InputForm from "./InputForm";


const InputFormConteiner = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActivCreate())
    }

    let postChange = (text) => {
        props.store.dispatch(changeNewPostTextActivCreate(text))

    }

    return (<InputForm newTextArea={state.profilePage.newTextArea}
                      addPost={addPost}
                      postChange={postChange} />)
}
export default InputFormConteiner