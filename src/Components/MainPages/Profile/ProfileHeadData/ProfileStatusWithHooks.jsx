import React, {useState} from "react";
import style from './Status.model.css';

const ProfileStatusWithHooks = (props) => {
    const [isEditStatus, setIsEditStatus] = useState(false);
    const [status, setStatus] = useState(props.status);

    const onEditStatus = () => setIsEditStatus(true);

    const onHandleChange = event => setStatus(event.target.value);

    const onChangedStatus = () => {
        debugger
        setIsEditStatus(false);
        props.updateStatus(status);
    }
    return <div>
        {!isEditStatus
            ? <div onClick={onEditStatus} style={style.edit} >{status || "New status"}</div>
            : <input value={status} onChange={onHandleChange} onBlur={onChangedStatus} autoFocus={true}/>
        }
    </div>
}
export default ProfileStatusWithHooks;