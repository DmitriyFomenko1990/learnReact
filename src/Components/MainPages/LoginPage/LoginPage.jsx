import React from "react";
import {Field, reduxForm} from "redux-form";
import style from './LoginPage.module.css';
import styleErr from "../../Tools/FormsControls.module.css"
import {alphaNumeric, minLength5, required} from "../../ utilities/Validators/formValidator";
import {Input} from "../../Tools/FormsControls";
import {connect} from "react-redux";
import {loginThunk} from "../../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Login'}
                    name={'email'}
                    type={'input'}
                    component={Input}
                    validate={[required, minLength5]}/></div>
        <div><Field placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[required, minLength5, alphaNumeric]}/></div>
        {props.error && <div className={styleErr.formSummaryError}>{props.error}</div>}
        <div><Field component={Input}
                    name={'rememberMe'}
                    type={'checkbox'}/><span className={style.checkBoxText}>remember me</span></div>
        <div>
            <button>submit</button>
        </div>
    </form>

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {loginThunk})(LoginPage)


