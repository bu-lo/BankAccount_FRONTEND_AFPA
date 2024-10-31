import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import "../../App.css";

function Header() {
    const navigate = useNavigate(); // Hook pour la navigation

    const handleLogout = () => {
        // Supprime le token d'authentification stocké dans le localStorage
        localStorage.removeItem('token');
        // Redirige vers la page de connexion
        navigate('/');
    };

    return (
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link to="/" className={styles.navItem}>LOG IN</Link>
                </li>
                <li>
                    <Link to="/signup" className={styles.navItem}>SIGN UP</Link>
                </li>
                <li>
                    <button type="button" onClick={handleLogout} className={styles.navItem}>LOG OUT</button>
                </li>
            </ul>
        </nav>
    );
}

export default Header;