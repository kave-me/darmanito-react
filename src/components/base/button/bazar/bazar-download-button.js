import React from 'react';
import bazarLogo from '../../../../asset/image/bazzar-logo.svg';
import bazarText from '../../../../asset/image/bazzar-text.svg';
import styles from './bazar-download-button.module.scss';
import cx from 'classnames';

const BazarDownloadButton = (props) => {
    return(
        <a className={styles.bazarButtonContainer} href={props.href} target="_blank" rel="noreferrer">
            <button className={styles.bazarButton} style={{backgroundColor: props.backgroundColor}}>
                <p className={cx(styles.bazarButton__text, styles.p2)}>دریافت از</p>
                <img src={bazarText} alt="Bazar text" className={styles.bazarButton__logoText}/>
                <img src={bazarLogo} alt="Bazar logo" className={styles.bazarButton__logo}/>
            </button>
        </a>
    );
}

export default BazarDownloadButton;