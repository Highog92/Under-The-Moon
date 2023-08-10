import style from './Header.module.scss'
import HeaderBg from '../../images/header.png'

export function Header() {
    return(

        <div className={style.container}>
            <img src={HeaderBg} alt="" />
            <section className={style.section}>
                <h2>HAIRSTYLIST OG FRISØR</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cum excepturi numquam veniam expedita esse temporibus? Nulla, unde tempore ullam beatae pariatur sunt saepe magni, odio harum sequi inventore enim.</p>
            </section>
        </div>

    )
}