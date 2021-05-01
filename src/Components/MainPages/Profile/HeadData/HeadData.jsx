import React from "react";
import style from './HeadData.module.css'
import Preloader from '../../../Tools/Preloader';
import logo from '../../../../img/logo1.jpg'
import Status from "./Status";


const HeadData = (props) => {

    if (!props.data  ){
        return <Preloader />
    } else
    return (
        <div className={style.profileHeader}>
            <div><img className={style.imageLogo} src ={ (props.data.photos.large
                                                            ?  props.data.photos.large
                                                            : logo)} ></img></div>
            <div className='profilData'>
                <div className={style.status}><Status updateStatus={props.updateStatus} status={props.status}/></div>
                <div className={style.name}>{props.data.fullName}</div>
                <div>
                    <ul className={style.profilList}>
                        <li>Ищет ратоту:{props.data.lookingForAJobDescription}</li>
                        <li>about me: {props.data.aboutMe}</li>
                        <li>Education: Kubgu`13</li>
                        <li>webSite: https://github.com/DmitriyFomenko1990</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HeadData