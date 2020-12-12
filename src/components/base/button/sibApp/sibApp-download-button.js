import React from 'react';
import sibAppLogo from '../../../../asset/image/sib-app-logo.svg';
import sibAppText from '../../../../asset/image/sib-app-text.svg';
import styles from './sibApp-download-button.module.scss';
import cx from 'classnames';

const SibAppDownloadButton = (props) => {
    return(
        <a href={props.href} className={styles.sibAppButtonContainer} target="_blank" rel="noreferrer">
            <button className={styles.sibAppButton} style={{backgroundColor: props.backgroundColor}}>
                    <img className={styles.sibAppButton__text__img} src={sibAppLogo} alt="sibAppLogo"/>
                <div className={styles.sibAppButton__text}>
                    <p className={cx(styles.sibAppButton__text__text, styles.p2)}>دریافت نسخه ios از</p>
                    <img className={styles.sibAppButton__logoText} src={sibAppText} alt="sibAppLogoText"/>
                </div>
            </button>
        </a>
    );
}

export default SibAppDownloadButton;
