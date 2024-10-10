import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/')} className={styles.navButton}>Home</button>
                    </li>
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/about')} className={styles.navButton}>About</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
