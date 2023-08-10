import style from './Navbar.module.scss/'

export function NavBar(props) {

    return (

        <nav>{props.navigation}
            <ul>
                <li>HJEM</li>
                <li>KONCEPTER</li>
                <li>UTM LOYALTY</li >
                <li>OM</li>
                <li>KONTAKT</li >
            </ul>
        </nav>
    )
}