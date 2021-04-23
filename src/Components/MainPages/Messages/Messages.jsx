import style from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import DialogContentConteiner from "./DialogContent/DialogContentConteiner";



const Messages = (props) => {

  return (
    <div className={style.gridMess}>
          <DialogContentConteiner />
    </div>
  )
}
export default Messages