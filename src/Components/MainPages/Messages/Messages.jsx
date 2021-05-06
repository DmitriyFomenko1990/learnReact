import React from "react";
import style from './Messages.module.css';
import DialogContentConteiner from "./DialogContent/DialogContentConteiner";

const Messages = () => {
  return (
    <div className={style.gridMess}>
          <DialogContentConteiner />
    </div>
  )
}
export default Messages;