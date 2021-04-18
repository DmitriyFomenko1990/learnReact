import style from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import DialogContentConteiner from "./DialogContent/DialogContentConteiner";



const Messages = (props) => {

  return (
    <div className={style.gridMess}>
        <Dialogs dialogsObjProps = {props.store.getState().messagePage.dialogsObject} />
        <DialogContentConteiner store = {props.store}

        />
    </div>
  )
}
export default Messages