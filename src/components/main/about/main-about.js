import React from 'react';
import mainAboutImg from '../../../asset/image/about-area-img.png';
import mainAboutIcon1 from '../../../asset/image/easy.svg';
import mainAboutIcon2 from '../../../asset/image/fast-search.svg';
import mainAboutIcon3 from '../../../asset/image/efficent.svg';
import mainAboutIcon4 from '../../../asset/image/search.svg';
import cx from 'classnames';
import styles from './main-about.module.scss';


const MainAbout = () => {
    return(
        <div className={cx(styles.mainAboutContainer, styles.section)}>
            <div className={styles.mainAbout}>
                <img className={styles.mainAbout__image} src={mainAboutImg} alt="main about"/>
                <div className={styles.mainAbout__iconsAndText}>
                    <div className={styles.mainAbout__icons}>
                        <div className={styles.mainAbout__icons__icon}>
                            <img className={styles.mainAbout__icons__icon__image} src={mainAboutIcon1} alt="icon1"/>
                            <p className={styles.mainAbout__icons__icon__text}>راحت</p>
                        </div>
                        <div className={styles.mainAbout__icons__icon}>
                            <img className={styles.mainAbout__icons__icon__image} src={mainAboutIcon2} alt="icon2"/>
                            <p className={styles.mainAbout__icons__icon__text}>جستجوی سریع</p>
                        </div>
                        <div className={styles.mainAbout__icons__icon}>
                            <img className={styles.mainAbout__icons__icon__image} src={mainAboutIcon3} alt="icon3"/>
                            <p className={styles.mainAbout__icons__icon__text}>به صرفه</p>
                        </div>
                        <div className={styles.mainAbout__icons__icon}>
                            <img className={styles.mainAbout__icons__icon__image} src={mainAboutIcon4} alt="icon4"/>
                            <p className={styles.mainAbout__icons__icon__text}>جستجوی سریع</p>
                        </div>
                    </div>
                    <div className={styles.mainAbout__text}>
                        <h2 className={styles.mainAbout__text__title}>درباره درمانیتو</h2>
                        <p className={styles.mainAbout__text__description}>درماینتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتینوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainAbout;