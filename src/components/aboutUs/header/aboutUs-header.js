import React from 'react';
import Card from './aboutUs-header-card';
import shortid from 'shortid';
import styles from './aboutUs-header.module.scss';
import cx from 'classnames';


const Header = () => {
    return(
        <div className={cx(styles.aboutUs__header, styles.section)}>
            <div className={styles.aboutUs__header__textAndInput}>
                <h1 className={styles.aboutUs__header__textAndInput__title}>شما هم در سلامت و بهبود مردم کشورمان موثر باشید.</h1>
                <p className={styles.aboutUs__header__textAndInput__description}>با ثبت نام به عنوان داروخانه یا فروشگاه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدید همچنین روزانه درآمد حساب خودتان را تصویه کنید.</p>
                <div className={styles.aboutUs__header__textAndInput__input}>
                    <input className={styles.aboutUs__header__textAndInput__input__input} type="text" placeholder="شماره همراه را وارد کنید: 09127654321"/>
                    <button className={styles.aboutUs__header__textAndInput__input__button}>ثبت نام سریع</button>
                </div>
            </div>
            <div className={styles.aboutUs__header__icons}>
                    <div className={styles.aboutUs__header__icons__icon__1}>
                        <Card
                            opacity={1}
                            width={100}
                            name='نام داروخانه شما'
                            address='درمانیتو - سرویس داروخانه - داروخانه شما'
                            img={null}
                            isBoarding={true}
                            key={shortid.generate()}/>
                        </div>
                    <div className={styles.aboutUs__header__icons__icon__2}>
                        <Card
                            opacity={.6}
                            width={80}
                            name='نام داروخانه شما'
                            address='درمانیتو - سرویس داروخانه - داروخانه شما'
                            img={null}
                            isBoarding={true}
                            key={shortid.generate()}/>
                        </div>
                    <div className={styles.aboutUs__header__icons__icon__3}>
                        <Card
                            opacity={.4}
                            width={75}
                            name='نام داروخانه شما'
                            address='درمانیتو - سرویس داروخانه - داروخانه شما'
                            img={null}
                            isBoarding={true}
                            key={shortid.generate()}/>
                    </div>
            </div>
        </div>
        );
}
export default Header;