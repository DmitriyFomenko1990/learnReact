import react from 'react'
import style from './HeadData.module.css'


const HeadData = () => {
  return (
    <div className={style.profileHeader}>
      <div><img className={style.imageLogo} src='https://p7.hiclipart.com/preview/247/564/869/computer-icons-user-profile-clip-art-user-avatar.jpg'></img> </div>
      <div className='profilData'>
        <div className={style.name}>Dmitriy Fomenko</div>
        <div>
          <ul className={style.profilList}>
            <li>Dae of Birth: 26/12</li>
            <li>City: Krasnodar</li>
            <li>Education: Kubgu`13</li>
            <li>webSite: https://github.com/DmitriyFomenko1990</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default HeadData