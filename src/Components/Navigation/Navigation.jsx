import react from 'react'
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={style.appNavigation}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></div>
            <div className={style.item}>
                <NavLink to="/messages" activeClassName={style.active}>Messages</NavLink></div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink></div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink></div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></div>
        </nav>
    )
}
export default Navigation