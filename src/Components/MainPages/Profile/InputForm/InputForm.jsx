import style from './InputForm.module.css';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {alphaNumeric, minLength5, required} from "../../../ utilities/Validators/formValidator";

const InputForm = (props) => {
    let onAddPost = (valios) => {
        props.addPost(valios.Textpost)
    }
    return (
        <div>
            <div className={style.headMyPost}>My posts</div>
            <InputReduxForm onSubmit={onAddPost}/>
        </div>
    )
}

const InputFormNew = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type={'text-area'}
                    placeholder={'...new post...'}
                    name={'Textpost'}
                    component={'input'}
                    validate={[required, minLength5, alphaNumeric]}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}
const InputReduxForm = reduxForm({form: 'login'})(InputFormNew);

export default InputForm;