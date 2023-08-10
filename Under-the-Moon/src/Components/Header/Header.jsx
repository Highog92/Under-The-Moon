import style from './Header.module.scss'
import HeaderBg from '../../images/header.png'

export function Header() {
    return(

        <div className={style.container}>
            <img src={HeaderBg} alt="Header background" />
            
        </div>

    )
}