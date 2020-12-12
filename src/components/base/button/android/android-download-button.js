import React from 'react';
import androidLogo from '../../../../asset/image/android.svg';
import styles from './android-download-button.module.scss';

const AndroidDownloadButton = (props) => {
    return(
        <a className={styles.androidButtonContainer} href={props.href} target="_blank" rel="noreferrer">
            <button className={styles.androidButton} style={{backgroundColor: props.backgroundColor}}>
                <img src={androidLogo} alt="Android logo" className={styles.androidButton__logo}/>
                <p className={styles.androidButton__text}>دانلود مستقیم</p>
            </button>
        </a>
    );
}

export default AndroidDownloadButton;