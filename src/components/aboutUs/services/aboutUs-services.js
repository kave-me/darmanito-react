import React from 'react';
import { Link } from 'react-router-dom';
import marketImage from '../../../asset/image/market.svg';
import pharmacyImage from '../../../asset/image/pharmacy.svg';
import styles from  './aboutUs-services.module.scss';
import cx from 'classnames';

const Services = () => {
    return(
        <div className={cx(styles.aboutUsServices, styles.section)}>
            <h2 className={styles.aboutUsServices__title}>در درمانیتو چه خدماتی ارائه می دهید؟</h2>
            <p className={styles.aboutUsServices__description}>خدمت مورد نظر خود را برای ثبت نام انتخاب کنید.</p>
            <div className={styles.aboutUsServices__cards}>
                <div className={styles.aboutUsServices__cards__card}>
                    <img className={styles.aboutUsServices__cards__card__img} src={marketImage} alt="market"/>
                    <h3 className={styles.aboutUsServices__cards__card__title}>فروشگاه آرایشی و بهداشتی</h3>
                    <p className={styles.aboutUsServices__cards__card__description}>مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <Link to="/registerpharmacy" className={styles.aboutUsServices__cards__card__button}>ثبت نام</Link>
                </div>

                <div className={styles.aboutUsServices__cards__card}>
                    <img className={styles.aboutUsServices__cards__card__img} src={pharmacyImage} alt="pharmacy"/>
                    <h3 className={styles.aboutUsServices__cards__card__title}>داروخانه</h3>
                    <p className={styles.aboutUsServices__cards__card__description}>مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <Link to="/registerpharmacy" className={styles.aboutUsServices__cards__card__button}>ثبت نام</Link>


                </div>
            </div>
        </div>
        );
}
export default Services;