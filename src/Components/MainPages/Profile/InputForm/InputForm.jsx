import style from './InputForm.module.css';
import React from 'react';


const InputForm = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.postChange(text);
    }

    return (
        <div>
            <div className={style.headMyPost}>My posts</div>
            <div className={style.headMyPost}>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} className={style.inputBox}
                              value={props.newTextArea}/>
                              <div>
                    <button type='button' className={style.inputSend} onClick={onAddPost}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default InputForm