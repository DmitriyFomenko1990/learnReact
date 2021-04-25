import react from 'react'
import smallAva from '../../img/smallAva.png'
import style from './Login.module.css'


const Login = (props) => {

    if (!props.havePersonData) {
        return <div>LOGIN</div>
    }
    return  (<div className={style.log}>
        <img src={!props.userData.photos.small
            ? smallAva
            : props.userData.photos.small}/>
             <div className={style.name}>{props.userData.fullName}</div>
    </div>)


}

export default Login