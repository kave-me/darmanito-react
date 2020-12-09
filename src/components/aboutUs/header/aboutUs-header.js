import React from 'react';
import Card from './aboutUs-header-card';
import headerCards from './aboutUs-header-card-list';
import './aboutUs-header.scss';




const Header = () => {
    return(
        <div className="aboutUs__header section">
            <div className="aboutUs__header__textAndInput">
                <h1 className="aboutUs__header__textAndInput__title">شما هم در سلامت و بهبود مردم کشورمان موثر باشید.</h1>
                <p className="aboutUs__header__textAndInput__description">با ثبت نام به عنوان داروخانه یا فروشگاه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدید همچنین روزانه درآمد حساب خودتان را تصویه کنید.</p>
                <div className="aboutUs__header__textAndInput__input">
                    <input className="aboutUs__header__textAndInput__input__input" type="text" placeholder="شماره همراه را وارد کنید: 09127654321"/>
                    <button className="aboutUs__header__textAndInput__input__button">ثبت نام سریع</button>
                </div>
            </div>
            <div className="aboutUs__header__icons">
                <div className="aboutUs__header__icons__icon">
                        {headerCards.map((item) => <Card
                                                    name={item.name}
                                                    address={item.address}
                                                    img={item.img}
                                                    isBoarding={item.isBoarding}
                                                    key={item.id}/>)}
                </div>
            </div>
        </div>
        );
}
export default Header;