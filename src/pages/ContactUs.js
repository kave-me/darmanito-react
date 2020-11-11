import React from 'react';
import TextBanner from '../components/TextBanner'
import Support from '../components/Support'
import Footer from '../components/Footer'
import SimpleMap from '../components/Map'

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
                <SimpleMap />
                </div>
            </div>
            <Support/>
            <Footer/>
        </div>
    );
}

export default ContactUs