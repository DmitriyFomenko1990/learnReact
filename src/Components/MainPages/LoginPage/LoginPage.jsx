import React from "react";
import {Field, reduxForm} from "redux-form"
import style from './LoginPage.module.css'
import {alphaNumeric, minLength5, required} from "../../ utilities/Validators/validatorForm";
import {Input} from "../../Tools/FormsControls";


const LoginForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
            <div><Field  placeholder={'Login'}
                         name={'login'}
                         type={'input'}
                         component={Input}
                         validate={[required, minLength5, alphaNumeric]}/></div>
            <div><Field  placeholder={'Password'}
                         name={'password'}
                         type={'input'}
                         component={Input}
                         validate={[required, minLength5, alphaNumeric]}/></div>
            <div><Field component={'input'}
                        name={'remember'}
                        type={'checkbox'}/><span className={style.checkBoxText}>remember me</span></div>
            <div>
                <button>submit</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;