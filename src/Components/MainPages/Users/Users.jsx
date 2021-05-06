import style from './Users.module.css';
import React from 'react';
import Preloader from '../../Tools/Preloader';
import logo1 from '../../../img/logo1.jpg';
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesAmount = Math.ceil(props.totalUsers / props.numberUsersPerPage / 100);

    let pagesAmountArrey = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pagesAmountArrey.push(<div onClick={() => props.changePage(i)} className={props.usersPageNumber === i
            ? style.pageActivEl
            : style.pageSwitcherEl}>{i}</div>)
    }

    return <div className={style.usersPage}>
        <div className={style.pageSwitcher}>
            {pagesAmountArrey}
        </div>
        {props.isReceivedStatus && <Preloader/>}
        {!props.isReceivedStatus && props.users.map((u) => <div key={u.id} className={style.userBlock}>
            <div>
                <NavLink to={`/profile/${u.id}`}>
                    <img alt={'err'} className={style.userAvatar} src={u.photos.small ? u.photos.small : logo1}/>
                </NavLink>
                <div className={style.button}>{u.isFallow
                    ? <button onClick={() => props.unfollow(u.id)}>FOLLOW</button>
                    : <button onClick={() => props.follow(u.id)}>UNFOLLOW</button>}
                </div>
            </div>
            <div className={style.infoBlock}>
                <div className={style.userInfo}>name: {u.name}</div>
                <div className={style.userInfo}>id :{u.id}</div>
                <div className={style.userInfo}>status: {u.status}</div>
            </div>
        </div>)
        }
    </div>
};
export default Users;