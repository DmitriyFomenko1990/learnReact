import React from "react";
import style from './Tools.module.css'



const Tools = () => {
  return (
    <div className={style.toolsWrapper}>
        <input type={"tel"} className={""} autoComplete={"off"} device={"desktop"}
               data-role={"input"} value={"5 500 000"} />

    </div>
  )
}
export default Tools