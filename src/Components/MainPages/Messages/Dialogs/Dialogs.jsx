import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    return (
        <div>
            {DialogsList(props.dialogsObjProps)}
        </div>
    )
}


const UserItem = (props) => {
    return <div className={style.list}><NavLink to={'/messeges/' + props.id}>{props.name}</NavLink></div>
}

function DialogsList(Arrey) {
    return Arrey.map((user) => <UserItem id={user.id} name={user.name}/>)
}


export default Dialogs

