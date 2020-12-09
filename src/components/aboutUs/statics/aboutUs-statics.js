import React from 'react';
import './aboutUs-statics.scss';

const AboutUsStatics = () => {
    return(
        <div className="aboutUsStatics section">
            <div className="aboutUsStatics__card">
                <p className="aboutUsStatics__card__title">تعداد کاربران درمانیتو</p>
                <p className="aboutUsStatics__card__number">+120,000</p>
            </div>
            <div className="aboutUsStatics__card">
                <p className="aboutUsStatics__card__title">تعداد داروخانه و مراکز</p>
                <p className="aboutUsStatics__card__number">+120,000</p>
            </div>
            <div className="aboutUsStatics__card">
                <p className="aboutUsStatics__card__title">تعداد فروشگاه ها</p>
                <p className="aboutUsStatics__card__number">+120,000</p>
            </div>
        </div>
        );
}
export default AboutUsStatics;