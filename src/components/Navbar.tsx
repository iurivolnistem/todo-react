import styles from './Navbar.module.css';

import rocketLogo from '../assets/rocket.svg';

export function Navbar(){
    return(
        <header className={styles.header}>
            <img src={rocketLogo} alt="Ícone de foguete" />
            <h1><span>to</span>do</h1>
        </header>
    );
}