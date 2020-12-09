import React from 'react';
import TextBanner from '../components/base/text-banner';
import Support from '../components/base/support';
import Footer from '../components/base/footer';
import SimpleMap from '../components/contactUs/map';

const ContactUs = () => {
    return (
        <div className="container">
            <TextBanner text="تماس با ما"/>
            <div className="contactUsFormAndMap section">
                <div className="messageForm">
                    <form className="messageForm__form">
                        <label className="messageForm__form__label" htmlFor="fullname">نام و نام خانوادگی</label>
                        <input className="messageForm__form__input" id="fullname" name="fullname" type="text" placeholder="نام و نام خانوادگی"/>
                        <label className="messageForm__form__label" htmlFor="emailAndPhone">ایمیل یا شماره همراه</label>
                        <input className="messageForm__form__input" id="emailAndPhone" type="text" placeholder="ایمیل یا شماره همراه"/>

                        <label className="messageForm__form__label" htmlFor="message">پیام شما</label>
                        <textarea className="messageForm__form__textarea" name="name is here" id="message" cols="30" rows="9" placeholder="متن پیام"></textarea>

                        <button className="messageForm__form__button">ارسال پیام</button>
                    </form>
                </div>
                <div className="contactUS__map"> 
                <SimpleMap>
                    <div className="contactUs__map__cover">
                        <div className="contactUs__map__cover__emailAndPhoneNumberContainer">
                            <div className="contactUs__map__cover__email">
                                <p className="contactUs__map__cover__email__label">ایمیل</p>
                                <p className="contactUs__map__cover__email__value">info@nahiratech.com</p>
                            </div>
                            <div className="contactUs__map__cover__phoneNumber">
                                <p className="contactUs__map__cover__phoneNumber__label">شماره ثابت</p>
                                <p className="contactUs__map__cover__phoneNumber__value">021-44219671</p>
                            </div>
                        </div>
                        <div className="contactUs__map__cover__address">
                            <p className="contactUs__map__cover__address__label">آدرس</p>
                            <p className="contactUs__map__cover__address__value">تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی، بن بست پنجم، پلاک 15، واحد 1</p>
                        </div>

                    </div>
                </SimpleMap>
                </div>
            </div>
            <Support/>
            <Footer/>
        </div>
    );
}

export default ContactUs