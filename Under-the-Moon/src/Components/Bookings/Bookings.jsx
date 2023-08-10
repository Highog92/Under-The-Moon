import style from './Bookings.module.scss'
import loyalty_free from '../../images/loyalty_free.png'
import one_2_one from '../../images/one_2_one.png'
export function Bookings(props) {
    return (

        <section className={style.bookingSection}> {props.Bookings}
            <div className={style.booking} style={{ backgroundImage: "url(" + one_2_one + ")" }} >
                <h3>One 2 One</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc
                    pellentesque senectus aliquam ipsum. Sed mauris
                    posuere odio nisl in. Massa vitae faucibus imperdiet
                    facilisi pulvinar maecenas platea purus pulvinar.
                    Lacinia imperdiet nisi nunc vel ut convallis a est
                    scelerisque
                </p>

                <button className={style.bookTid}>BOOK TID</button>
            </div>

            <div className={style.booking} style={{ backgroundImage: "url(" + loyalty_free + ")" }}>
                <h3>Loyalty Free</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc
                    pellentesque senectus aliquam ipsum. Sed mauris
                    posuere odio nisl in. Massa vitae faucibus imperdiet
                    facilisi pulvinar maecenas platea purus pulvinar.
                    Lacinia imperdiet nisi nunc vel ut convallis a est
                    scelerisque.
                </p>
                <button className={style.bookTid}>LÆS MERE HER</button>

            </div>
        </section>

    )
}