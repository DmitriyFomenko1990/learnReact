import react from 'react'
import smallAva from '../../img/smallAva.png'
import style from './Login.module.css'


const Login = (props) => {

    if (!props.userData.isAuth) {
        return <div>LOGIN</div>
    }
   return  (<div className={style.log}>
        <img src={smallAva}/>
             <div className={style.name}>{props.userData.login}</div>
    </div>)


}

export default Login