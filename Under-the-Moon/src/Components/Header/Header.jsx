import style from './Header.module.scss'
import HeaderBg from '../../images/header.png'

export function Header() {
    return(

        <div className={style.container} style={{backgroundImage: `url(${HeaderBg})`}}>
            <section className={style.section}>
                <h2></h2>
                <p></p>
            </section>
        </div>

    )
}