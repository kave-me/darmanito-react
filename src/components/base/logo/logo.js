import React from 'react'
import logo from '../../../asset/image/logo.svg'
import styles from './logo.module.scss';


const Logo = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logo__img} src={logo} alt="logo" />
            <div className={styles.logo__text}>
                <p className={styles.logo__text__head}><strong>درمانیتو</strong></p>
                <p className={styles.logo__text__body}>همراه شما در درمان</p>
            </div>
        </div>
    );
}

export default Logo