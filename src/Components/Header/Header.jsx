import react from 'react'
import style from './Header.module.css'
import Navigation from "../Navigation/Navigation";
import LoginConteiner from "./LoginConteiner";


const Header = () => {
    return (
        <header className={style.header}>
            <div><img className={style.imgBack}
                      src="//u20.plpstatic.ru/s/1q12q5051/f40a13c78ab7e274e88e5578e8da0312/ba32c7b60cacbc4a1cda98a08e848af6.png"/>
            </div>
            <div><Navigation className={style.navigationBox}/></div>

            <div><LoginConteiner /></div>
        </header>
    )
}
export default Header