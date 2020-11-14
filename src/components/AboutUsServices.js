import React from 'react';
import marketImage from '../asset/image/market.svg';
import pharmacyImage from '../asset/image/pharmacy.svg';

const AboutUsServices = () => {
    return(
        <div className="aboutUsServices section">
            <h2 className="aboutUsServices__title">در درمانیتو چه خدماتی ارائه می دهید؟</h2>
            <p className="aboutUsServices__description">خدمت مورد نظر خود را برای ثبت نام انتخاب کنید.</p>
            <div className="aboutUsServices__cards">
                <div className="aboutUsServices__cards__card">
                    <img className="aboutUsServices__cards__card__img" src={marketImage} alt="market"/>
                    <h3 className="aboutUsServices__cards__card__title">فروشگاه آرایشی و بهداشتی</h3>
                    <p className="aboutUsServices__cards__card__description">مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <button className="aboutUsServices__cards__card__button">ثبت نام</button>
                </div>

                <div className="aboutUsServices__cards__card">
                    <img className="aboutUsServices__cards__card__img" src={pharmacyImage} alt="pharmacy"/>
                    <h3 className="aboutUsServices__cards__card__title">داروخانه</h3>
                    <p className="aboutUsServices__cards__card__description">مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <button className="aboutUsServices__cards__card__button">ثبت نام</button>


                </div>
            </div>
        </div>
        );
}
export default AboutUsServices;