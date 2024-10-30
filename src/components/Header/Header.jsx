import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import "../../App.css";

function Header() {
    return(
    <nav>
        <ul className={styles.nav}>
            <li>
                <Link to="/" className={styles.navItem}>LOG IN</Link>
            </li>
            <li>
                <Link to="/signup" className={styles.navItem}>SIGN UP</Link>
            </li>
            <li>
                <button type="button">LOG OUT</button>
            </li>
        </ul>
    </nav> 
    )
}

export default Header;