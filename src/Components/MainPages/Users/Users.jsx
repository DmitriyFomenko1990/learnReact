import style from './Users.module.css'
import React from 'react';
import Preloader from '../../../img/preloader.gif'



const Users = (props) => {

        let pagesAmount = Math.ceil(props.totalUsers / props.usersPageCount / 100)

        let pagesAmountArrey = []
        for (let i = 1; i <= pagesAmount; i++) {
            pagesAmountArrey.push(<div onClick={(page) => props.changePage(i)} className={props.usersPageNumber === i
                ? style.pageActivEl
                : style.pageSwitcherEl}>{i}</div>)
        }

        return <div className={style.usersPage}>


            <div className={style.pageSwitcher}>
                {pagesAmountArrey}
            </div>
            {props.isReceivedStatus && <img src={Preloader}  className={style.preloader}/>}

            {
                props.users.map((u) => <div key={u.id} className={style.userBlock}>
                    <div>
                        <img className={style.userAvatar} src={ u.photos.small ? u.photos.small : "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"}/>
                        <div className={style.button}>{u.isFallow
                            ? <button onClick={() => props.unfollow(u.id)}>FOLLOW</button>
                            : <button onClick={() => props.follow(u.id)}>UNFOLLOW</button>}
                        </div>
                    </div>
                    <div className={style.infoBlock}>
                        <div className={style.userInfo}>name: {u.name}</div>
                        <div className={style.userInfo}>uniqueUrlName: {u.uniqueUrlName}</div>
                        <div className={style.userInfo}>id :{u.id}</div>
                        <div className={style.userInfo}>status: {u.status}</div>
                    </div>
                </div>)
            }
        </div>

}


export default Users