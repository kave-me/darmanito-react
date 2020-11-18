import React from 'react';
import mainHeader from '../asset/image/mainHeader.svg';

const MainHeader = () => {
    return(
        <div className="mainHeader section">
            <div className="mainHeader__textAndButtons">
                <h1 className="mainHeader__textAndButtons__title">اپلیکیشن درمانیتو</h1>
                <p className="mainHeader__textAndButtons__description">درمانیتو سامانه هوشمند درمان و سلامت</p>
                <div className="mainHeader__textAndButtons__buttons">
                    <button className="mainHeader__textAndButtons__buttons__download">دانلود درمانیتو</button>
                    <button className="mainHeader__textAndButtons__buttons__register">عضویت داروخانه ها</button>
                </div>
            </div>
                <img className="mainHeader__image" src={mainHeader} alt="header"/>
        </div>
    );
}

export default MainHeader;