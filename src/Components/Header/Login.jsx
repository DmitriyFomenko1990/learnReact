import React from 'react';
import smallAva from '../../img/smallAva.png';
import style from './Login.module.css';


const Login = (props) => {
    if (!props.userData.isAuth) {
        return <div>Войти</div>
    }
    return (<div className={style.log}>
        <img src={smallAva}/>
        <div className={style.name}>{props.userData.login}</div>
        <div onClick={props.onLogout}>Выйти</div>
    </div>)
}
export default Login;