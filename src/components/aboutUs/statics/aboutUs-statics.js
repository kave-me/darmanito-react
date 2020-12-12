import React from 'react';
import styles from './aboutUs-statics.module.scss';
import cx from 'classnames';

const AboutUsStatics = () => {
    return(
        <div className={cx(styles.aboutUsStatics, styles.section)}>
            <div className={styles.aboutUsStatics__card}>
                <p className={styles.aboutUsStatics__card__title}>تعداد کاربران درمانیتو</p>
                <p className={styles.aboutUsStatics__card__number}>+120,000</p>
            </div>
            <div className={styles.aboutUsStatics__card}>
                <p className={styles.aboutUsStatics__card__title}>تعداد داروخانه و مراکز</p>
                <p className={styles.aboutUsStatics__card__number}>+120,000</p>
            </div>
            <div className={styles.aboutUsStatics__card}>
                <p className={styles.aboutUsStatics__card__title}>تعداد فروشگاه ها</p>
                <p className={styles.aboutUsStatics__card__number}>+120,000</p>
            </div>
        </div>
        );
}
export default AboutUsStatics;