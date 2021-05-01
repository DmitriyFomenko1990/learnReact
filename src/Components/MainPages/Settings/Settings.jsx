import React from "react";
import style from './Settings.module.css'
import {Field, reduxForm} from "redux-form";


const InputFormNew = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div><Field type={'text-area'}
                    placeholder={'...new post...'}
                    name={'post'}
                    component={'input'}></Field></div>
        <div><button>send</button></div>
    </form>
}
const InputReduxForm = reduxForm({form: 'login'})(InputFormNew)


const Settings = () => {
    const  onSubmit= (data) =>{console.log(data)}
  return (
    <div>
        <InputReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
export default Settings