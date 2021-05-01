import React from "react";
import HeadData from './HeadData/HeadData'
import style from './Profile.module.css'
import InputFormConteiner from "./InputForm/InputFormConteiner";
import {updateStatus} from "../../../Redux/profile-reducer";





const Profile = (props) => {


    return (

        <div className={style.profileWrapper}>
             <HeadData updateStatus={props.updateStatus} status={props.status} data={props.data}/>

            <InputFormConteiner/>

            {Posts(props.postsObj)}
        </div>
    )
}


const Post = (props) => {
    return (<div>{props.message}</div>
    )
}

function Posts(Arrey) {

    return Arrey.map(p => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id}/>
    })
}

export default Profile
