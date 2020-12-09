import React from 'react';
import supportLogo from '../../../asset/image/support-area-bt.png';
import './support.scss';

const Support = () => {
    return(
        <div className="section support">
            <div className="support__text">
                <p className="support__text__title">پشتیبانی درمانیتو</p>
                <p className="support__text__body p2">پاسخگویی در روزهای کاری از ساعت 9 صبح تا 9 شب</p>
            </div>
            <button className="support__button">
                <img src={supportLogo} alt="support icon" className="support__button__img"/>
                <p className="support__button__text p2"><a className="support__button__text__a" href="tel:009844219671">پشتیبانی:   02144219671</a></p>
            </button>
        </div>
    );
}

export default Support