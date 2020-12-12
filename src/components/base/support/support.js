import React from 'react';
import supportLogo from '../../../asset/image/support-area-bt.png';
import styles from './support.module.scss';
import cx from 'classnames';

const Support = () => {
    return(
        <div className={cx(styles.section, styles.support)}>
            <div className={styles.support__text}>
                <p className={styles.support__text__title}>پشتیبانی درمانیتو</p>
                <p className={cx(styles.support__text__body, styles.p2)}>پاسخگویی در روزهای کاری از ساعت 9 صبح تا 9 شب</p>
            </div>
            <button className={styles.support__button}>
                <img src={supportLogo} alt="support icon" className={styles.support__button__img}/>
                <p className={cx(styles.support__button__text, styles.p2)}><a className={styles.support__button__text__a} href="tel:009844219671">پشتیبانی:   02144219671</a></p>
            </button>
        </div>
    );
}

export default Support